import React, { useEffect, useState } from "react";

import { Container, HabitCard } from "../EditHabit/styles";
import { useLoading } from "../../../context/LoadingContext";

const TrackHabit: React.FC = () => {
  const [habits, setHabits] = useState<{ habit: string; completed: number }[]>(
    []
  );
  const { setLoadingData } = useLoading();
  const fetchFromStore = async () => {
    try {
      setLoadingData(true);
      const result = await fetch("/api/habitpuppy/habits");
      const data = await result.json();
      setHabits(data.items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchFromStore();
  }, []);

  return (
    <Container>
      {habits.map((habit) => (
        <HabitCard key={habit.habit}>
          <h3>{habit.habit}</h3>
          <div>
            <h3>{habit.completed}</h3>
          </div>
        </HabitCard>
      ))}
    </Container>
  );
};

export default TrackHabit;
