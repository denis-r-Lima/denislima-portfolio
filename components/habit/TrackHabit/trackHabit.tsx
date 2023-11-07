import React, { useEffect, useState } from "react";

import { Container, HabitCard } from "../EditHabit/styles";
import { useHabitContext } from "../../../context/HabitContext";

type HabitListType = {
  habits: { [name: string]: { [year: string]: { [month: string]: number } } };
};

const TrackHabit: React.FC = () => {
  const { getList, fetched, fetchFromStore } = useHabitContext();
  const [habits, setHabits] = useState<HabitListType>({
    habits: {},
  });
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  useEffect(() => {
    if (!fetched) fetchFromStore();
  }, []);

  useEffect(() => {
    const data = getList();
    if (!data) return;
    setHabits(data);
  }, [fetched]);

  return (
    <Container>
      {Object.keys(habits.habits).map((val) => (
        <HabitCard key={val}>
          <h3>{val}</h3>
          <div>
            <h3>
              {habits.habits[val][`${year}`]
                ? habits.habits[val][`${year}`][`${month}`]
                  ? habits.habits[val][`${year}`][`${month}`]
                  : 0
                : 0}
            </h3>
          </div>
        </HabitCard>
      ))}
    </Container>
  );
};

export default TrackHabit;
