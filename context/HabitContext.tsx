import { getAuth, getIdToken } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoading } from "./LoadingContext";

type TodayDataType = { date: string; habits: string[]; completed: string[] };
type HabitListType = { baseYear: number; habits: { [name: string]: number } };

type HabitsType = { habitList: HabitListType; today: TodayDataType };

type HabitContextType = {
  habitList: HabitListType;
  today: TodayDataType;
  getTodayData: () => TodayDataType;
  getList: () => HabitListType;
  updateList: (data: HabitListType, value?: string) => void;
  updateToday: (
    data: TodayDataType,
    completed: boolean,
    habitCompleted: string
  ) => void;
  resetToday: (newDate: string) => TodayDataType;
  fetched: boolean;
  fetchFromStore: () => void;
};

const habitContext = createContext({} as HabitContextType);

const HabitContextProvider: React.FC = ({ children }) => {
  const [habit, setHabit] = useState({} as HabitsType);
  const [fetched, setFetched] = useState(false);
  const { setLoadingData } = useLoading();

  const fetchFromStore = async () => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    console.log(auth.currentUser.uid);
    try {
      setLoadingData(true);
      const token = await getIdToken(auth.currentUser);
      const result = await fetch(
        `/api/habitpuppy/habits?token=${token}&user=${userId}`
      );
      const data: HabitsType = await result.json();

      setHabit(data);

      setFetched(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!habit.habitList) return;
    const currentYear = new Date().getFullYear();
    if (habit.habitList.baseYear != currentYear) {
      Object.keys(habit.habitList.habits).map(
        (val) => (habit.habitList.habits[val] = 0)
      );
      habit.habitList.baseYear = currentYear;

      updateList(habit.habitList);
    }
  }, [habit]);

  const getTodayData = () => {
    return habit.today;
  };

  const getList = () => {
    return habit.habitList;
  };

  const updateList = async (data: HabitListType, value?: string) => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    const temp = { ...habit, habitList: data };
    if (value) {
      if (habit.habitList.habits[value] != undefined) {
        temp.today.habits = temp.today.habits.filter((val) => val != value);
      } else {
        temp.today.habits.push(value);
      }
    }

    try {
      setLoadingData(true);
      const token = await getIdToken(auth.currentUser);
      await fetch("/api/habitpuppy/habits", {
        method: "PUT",
        body: JSON.stringify({
          data: temp,
          token,
          user: userId,
        }),
      });
      setHabit(temp);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  const updateToday = async (
    data: TodayDataType,
    completed: boolean,
    habitCompleted: string
  ) => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    const temp: HabitsType = { ...habit, today: data };
    if (completed) {
      temp.habitList.habits[habitCompleted]++;
    }
    try {
      setLoadingData(true);
      const token = await getIdToken(auth.currentUser);
      await fetch("/api/habitpuppy/habits", {
        method: "PUT",
        body: JSON.stringify({
          data: temp,
          token,
          user: userId,
        }),
      });
      setHabit(temp);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingData(false);
    }
  };

  const resetToday = (newDate: string) => {
    const temp: TodayDataType = {
      date: newDate,
      habits: Object.keys(getList().habits),
      completed: [],
    };
    setHabit((prevState) => ({ ...prevState, today: temp }));
    updateToday(temp, false, "");
    return temp;
  };

  return (
    <habitContext.Provider
      value={{
        ...habit,
        getTodayData,
        getList,
        updateList,
        updateToday,
        resetToday,
        fetched,
        fetchFromStore,
      }}
    >
      {children}
    </habitContext.Provider>
  );
};

export const useHabitContext = () => useContext(habitContext);

export default HabitContextProvider;
