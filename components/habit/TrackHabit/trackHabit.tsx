import React, { useEffect, useState } from "react";

import { Container, HabitCard } from "../EditHabit/styles";
import { useHabitContext } from "../../../context/HabitContext";

type HabitListType = { baseYear: number; habits: { [name: string]: number } };

const TrackHabit: React.FC = () => {
  const { getList, fetched } = useHabitContext();
  const [habits, setHabits] = useState<HabitListType>({
    baseYear: 0,
    habits: {},
  });

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
            <h3>{habits.habits[val]}</h3>
          </div>
        </HabitCard>
      ))}
    </Container>
  );
};

export default TrackHabit;
