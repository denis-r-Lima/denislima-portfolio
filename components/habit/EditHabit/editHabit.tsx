import React, { useEffect, useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";

import { Card, Container, HabitCard } from "./styles";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import { useHabitContext } from "../../../context/HabitContext";

type HabitListType = {
  baseYear: number;
  habits: { [name: string]: { [year: string]: { [month: string]: number } } };
  perfectDays: number;
};

const AddHabit: React.FC = () => {
  const { getList, updateList, fetched, fetchFromStore } = useHabitContext();
  const theme = useTheme();
  const [newHabit, setNewHabit] = useState<string>("");
  const [habits, setHabits] = useState<HabitListType>({
    baseYear: 0,
    habits: {},
    perfectDays: 0,
  });

  useEffect(() => {
    if (!fetched) fetchFromStore();
  }, []);

  useEffect(() => {
    const data = getList();
    if (!data) return;

    setHabits(data);
  }, [fetched]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setNewHabit(value);
  };

  const addHabit = async () => {
    if (habits.habits[newHabit]) {
      setNewHabit("");
      return;
    }
    const temp: HabitListType = {
      ...habits,
      habits: { ...habits.habits, [newHabit]: {} },
    };
    setHabits(temp);
    updateList(temp, newHabit);
    setNewHabit("");
  };

  const removeHabit = async (habit: string) => {
    const temp = { ...habits, habits: { ...habits.habits } };
    delete temp.habits[habit];
    setHabits(temp);
    updateList(temp, habit);
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
      {Object.keys(habits.habits).map((habit) => (
        <HabitCard key={habit}>
          <h3>{habit}</h3>
          <div>
            <TbTrashXFilled
              size={"2.5rem"}
              onClick={(_) => removeHabit(habit)}
            />
          </div>
        </HabitCard>
      ))}
    </Container>
  );
};

export default AddHabit;
