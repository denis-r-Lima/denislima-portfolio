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
  const { habit, updateToday, fetched, resetToday, fetchFromStore, checkDate } =
    useHabitContext();
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  useEffect(() => {
    if (!fetched) {
      fetchFromStore();
      return;
    }
    checkDate();
  }, []);

  useEffect(() => {
    if (!habit?.today) return;
    const date = habit.today.date.split("-");
    if (
      parseInt(date[0]) != month ||
      parseInt(date[1]) != day ||
      parseInt(date[2]) != year
    ) {
      resetToday(`${month}-${day}-${year}`);
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
      ...habit.today,
      habits: habit.today.habits.filter((_, idx) => idx != index),
      completed: completed
        ? [...habit.today.completed, habit.today.habits[index]]
        : [...habit.today.completed],
      notCompleted: completed
        ? [...habit.today.notCompleted]
        : [...habit.today.notCompleted, habit.today.habits[index]],
    };
    const habitClosed = habit.today.habits[index];
    updateToday(temp, completed, habitClosed);
  };

  return (
    <Container>
      {habit?.today?.habits?.map((habit, index) => (
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
      {habit?.today?.completed?.length > 0 && (
        <>
          <h1>Completed Tasks ({habit.today.completed?.length})</h1>
          {habit.today.completed.map((habit) => (
            <Card key={habit} className="completed fixed">
              <CardTextBox>{habit}</CardTextBox>
            </Card>
          ))}
        </>
      )}
      {habit?.today?.notCompleted?.length > 0 && (
        <>
          <h1>Not Completed Tasks ({habit.today.notCompleted?.length})</h1>
          {habit.today.notCompleted.map((habit) => (
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
