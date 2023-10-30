import React, { useEffect, useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";

import { Card, Container, HabitCard } from "./styles";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import { useHabitContext } from "../../../context/HabitContext";

type HabitListType = { baseYear: number; habits: { [name: string]: number } };

const AddHabit: React.FC = () => {
  const { getList, updateList, fetched, getTodayData, updateToday } =
    useHabitContext();
  const theme = useTheme();
  const [newHabit, setNewHabit] = useState<string>("");
  const [habits, setHabits] = useState<HabitListType>({
    baseYear: 0,
    habits: {},
  });

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
    const temp: HabitListType = {
      ...habits,
      habits: { ...habits.habits, [newHabit]: 0 },
    };
    setHabits(temp);
    updateList(temp);
    const today = getTodayData();
    today.habits.push(newHabit);
    updateToday(today, false, "");
    setNewHabit("");
  };

  const removeHabit = async (habit: string) => {
    const temp = { ...habits, habits: { ...habits.habits } };
    delete temp.habits[habit];
    const today = getTodayData();
    today.habits = today.habits.filter((val) => val != habit);
    updateToday(today, false, "");
    setHabits(temp);
    updateList(temp);
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
