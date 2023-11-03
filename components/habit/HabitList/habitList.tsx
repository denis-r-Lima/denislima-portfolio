import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import { Card, CardTextBox, Container } from "./styles";
import { useHabitContext } from "../../../context/HabitContext";

type TodayDataType = {
  date: string;
  habits: string[];
  completed: string[];
  notCompleted: string[];
};

const HabitList: React.FC = () => {
  const [habitData, setHabitData] = useState<TodayDataType>({
    date: "",
    habits: [],
    completed: [],
    notCompleted: [],
  });
  const { getTodayData, updateToday, fetched, resetToday, fetchFromStore } =
    useHabitContext();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  useEffect(() => {
    if (!fetched) fetchFromStore();
  }, []);

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
    card.classList.add("remove", completed ? "completed" : "incomplete");
    const temp: TodayDataType = {
      ...habitData,
      habits: habitData.habits.filter((_, idx) => idx != index),
      completed: completed
        ? [...habitData.completed, habitData.habits[index]]
        : [...habitData.completed],
      notCompleted: completed
        ? [...habitData.notCompleted]
        : [...habitData.notCompleted, habitData.habits[index]],
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
      <br />
      {habitData.completed?.length > 0 && (
        <>
          <h1>Completed Tasks ({habitData.completed?.length})</h1>
          {habitData.completed.map((habit) => (
            <Card key={habit} className="completed fixed">
              <CardTextBox>{habit}</CardTextBox>
            </Card>
          ))}
        </>
      )}
      {habitData.notCompleted?.length > 0 && (
        <>
          <h1>Not Completed Tasks ({habitData.notCompleted?.length})</h1>
          {habitData.notCompleted.map((habit) => (
            <Card key={habit} className="incomplete fixed">
              <CardTextBox>{habit}</CardTextBox>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default HabitList;
