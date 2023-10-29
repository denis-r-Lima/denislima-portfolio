import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { Card, CardTextBox, Container } from "./styles";
import { useLoading } from "../../../context/LoadingContext";
import { getAuth, getIdToken } from "firebase/auth";

const HabitList: React.FC = () => {
  const [habitData, setHabitData] = useState<string[]>([]);
  const { setLoadingData } = useLoading();
  const auth = getAuth();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  const fetchFromStore = async () => {
    try {
      setLoadingData(true);
      const result = await fetch("/api/habitpuppy/habits?source=today");
      const data = await result.json();

      const date = data.date.split("-");

      if (date[0] != month || date[1] != day || date[2] != year) {
        const result = await fetch("/api/habitpuppy/habits");
        const data = await result.json();
        const habits: { habit: string; year: number; completed: number }[] =
          data.items;
        const habitList = habits.map((item) => item.habit);
        setHabitData(habitList);
        const token = await getIdToken(auth.currentUser);
        try {
          setLoadingData(true);
          await fetch("/api/habitpuppy/habits?source=today", {
            method: "PUT",
            body: JSON.stringify({
              data: { items: habitList, date: `${month}-${day}-${year}` },
              token,
            }),
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        setHabitData(data.items);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchFromStore();
  }, []);

  const handleCompleted = async (
    index: number,
    e: React.MouseEvent<SVGElement, MouseEvent>,
    completed: boolean = true
  ) => {
    const card = e.currentTarget.parentElement.parentElement;
    card.classList.add("remove");
    const habitCompleted = habitData[index];
    const tempData = habitData.filter((_, idx) => index != idx);
    const token = await getIdToken(auth.currentUser);
    setTimeout(() => {
      setHabitData(tempData);
    }, 1000);
    try {
      setLoadingData(true);
      await fetch("/api/habitpuppy/habits?source=today", {
        method: "PUT",
        body: JSON.stringify({
          data: { items: tempData, date: `${month}-${day}-${year}` },
          token,
          completed: completed ? habitCompleted : false,
        }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Container>
      {habitData.map((habit, index) => (
        <Card key={habit}>
          <CardTextBox>{habit}</CardTextBox>
          <div>
            <AiOutlineCheckCircle
              fontSize={"3.5rem"}
              onClick={(e) => handleCompleted(index, e)}
            />
            <AiOutlineCloseCircle
              fontSize={"3.5rem"}
              onClick={(e) => handleCompleted(index, e, false)}
            />
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default HabitList;
