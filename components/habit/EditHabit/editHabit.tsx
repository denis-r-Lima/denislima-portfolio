import React, { useEffect, useState } from "react";
import { TbTrashXFilled, TbPencil } from "react-icons/tb";
import { GiConfirmed, GiCancel } from "react-icons/gi";

import { Card, Container, HabitCard } from "./styles";
import StyledInput from "../../StyledComponents/StyledInput/StyledInput";
import { useTheme } from "styled-components";
import StyledButton from "../../StyledComponents/StyledButton/StyledButton";
import { useHabitContext } from "../../../context/HabitContext";

const AddHabit: React.FC = () => {
  const {
    habit,
    fetched,
    fetchFromStore,
    checkDate,
    editList,
    deleteHabit,
    addHabit,
  } = useHabitContext();
  const theme = useTheme();
  const [newHabit, setNewHabit] = useState<string>("");
  const [editing, setEditing] = useState<{ editing: string; changed: string }>({
    editing: "",
    changed: "",
  });

  useEffect(() => {
    if (!fetched) {
      fetchFromStore();
      return;
    }
    checkDate();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setNewHabit(value);
  };

  const add = async () => {
    if (newHabit === "") return;
    if (habit.habitList.habits[newHabit]) {
      setNewHabit("");
      return;
    }
    await addHabit(newHabit);
    setNewHabit("");
  };

  const clickEdit = (habit: string) => {
    setEditing({ editing: habit, changed: habit });
  };

  const handleEdit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.currentTarget;
    setEditing((prevState) => ({ ...prevState, changed: value }));
  };

  const saveCancel = async (save: boolean = true) => {
    if (save) {
      await editList(editing);
    }

    setEditing({ editing: "", changed: "" });
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
          onClick={add}
        >
          add
        </StyledButton>
      </Card>
      {habit?.habitList &&
        Object.keys(habit?.habitList?.habits).map((habit) => (
          <HabitCard key={habit}>
            {editing.editing === habit ? (
              <>
                <StyledInput
                  title="Habit"
                  name="Habit"
                  onChange={handleEdit}
                  value={editing.changed}
                  backgroundColor={theme.pallet.color.primaryVeryLight}
                  color={theme.pallet.color.backgroundSecondary}
                  colorHover={theme.pallet.color.backgroundSecondary}
                  focusColor={theme.pallet.color.backgroundSecondary}
                  required
                ></StyledInput>
                <div>
                  <GiConfirmed size={"2.5rem"} onClick={(_) => saveCancel()} />
                  <GiCancel
                    size={"2.5rem"}
                    onClick={(_) => saveCancel(false)}
                  />
                </div>
              </>
            ) : (
              <>
                <h3>{habit}</h3>
                <div>
                  <TbPencil size={"2.5rem"} onClick={(_) => clickEdit(habit)} />
                  <TbTrashXFilled
                    size={"2.5rem"}
                    onClick={(_) => deleteHabit(habit)}
                  />
                </div>
              </>
            )}
          </HabitCard>
        ))}
    </Container>
  );
};

export default AddHabit;
