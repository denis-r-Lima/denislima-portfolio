import React, { useEffect, useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";

import { Card, Container, HabitCard } from "./styles";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import { useLoading } from "../../../context/LoadingContext";
import { getIdToken, getAuth } from "firebase/auth";
type HabitType = {
  habit: string;
  completed: number;
}[];

const AddHabit: React.FC = () => {
  const auth = getAuth();
  const theme = useTheme();
  const [newHabit, setNewHabit] = useState<string>("");
  const { setLoadingData } = useLoading();
  const [habits, setHabits] = useState<HabitType>([]);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setNewHabit(value);
  };

  const addHabit = async () => {
    const tempHabits = [...habits, { habit: newHabit, completed: 0 }];
    setHabits(tempHabits);
    setNewHabit("");

    const token = await getIdToken(auth.currentUser);
    try {
      setLoadingData(true);
      await fetch("/api/habitpuppy/habits", {
        method: "PUT",
        body: JSON.stringify({
          data: { items: tempHabits, baseYear: new Date().getFullYear() },
          token,
        }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  const removeHabit = async (index: number) => {
    const temp = habits.filter((_, idx) => index != idx);
    setHabits(temp);
    const token = await getIdToken(auth.currentUser);
    try {
      setLoadingData(true);
      await fetch("/api/habitpuppy/habits", {
        method: "PUT",
        body: JSON.stringify({ data: { items: temp }, token }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };
  return (
    <Container>
      <Card>
        <h1>Let's add one new habit</h1>
        <StyledInput
          title="Habit"
          name="Habit"
          onChange={handleChange}
          value={newHabit}
          backgroundColor={theme.pallet.color.primaryVeryLight}
          color={theme.pallet.color.backgroundSecondary}
          colorHover={theme.pallet.color.backgroundSecondary}
          focusColor={theme.pallet.color.backgroundSecondary}
          required
        />
        <StyledButton
          color={theme.pallet.color.baseDark}
          backgroundColor={theme.admin.color.secondaryLight}
          onClick={addHabit}
        >
          add
        </StyledButton>
      </Card>
      {habits.map((habit, index) => (
        <HabitCard key={habit.habit}>
          <h3>{habit.habit}</h3>
          <div>
            <TbTrashXFilled
              size={"2.5rem"}
              onClick={(_) => removeHabit(index)}
            />
          </div>
        </HabitCard>
      ))}
    </Container>
  );
};

export default AddHabit;
