import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { Card, CardTextBox, Container } from "./styles";
import { useHabitContext } from "../../../context/HabitContext";

type TodayDataType = { date: string; habits: string[] };

const HabitList: React.FC = () => {
  const [habitData, setHabitData] = useState<TodayDataType>({
    date: "",
    habits: [],
  });
  const { getTodayData, updateToday, fetched, resetToday } = useHabitContext();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  useEffect(() => {
    const data = getTodayData();
    if (!data) return;
    const date = data.date.split("-");
    if (
      parseInt(date[0]) != month ||
      parseInt(date[1]) != day ||
      parseInt(date[2]) != year
    ) {
      const newData = resetToday(`${month}-${day}-${year}`);
      setHabitData(newData);
    } else {
      setHabitData(data);
    }
  }, [fetched]);

  const handleCompleted = async (
    index: number,
    e: React.MouseEvent<SVGElement, MouseEvent>,
    completed: boolean = true
  ) => {
    const card = e.currentTarget.parentElement.parentElement;
    card.classList.add("remove");
    const temp: TodayDataType = {
      ...habitData,
      habits: habitData.habits.filter((_, idx) => idx != index),
    };
    const habitClosed = habitData.habits[index];
    setTimeout(() => {
      setHabitData(temp);
    }, 1000);

    updateToday(temp, completed, habitClosed);
  };

  return (
    <Container>
      {habitData.habits.map((habit, index) => (
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
