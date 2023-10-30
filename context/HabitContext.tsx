import { getAuth, getIdToken } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoading } from "./LoadingContext";

type TodayDataType = { date: string; habits: string[] };
type HabitListType = { baseYear: number; habits: { [name: string]: number } };

type HabitsType = { habitList: HabitListType; today: TodayDataType };

type HabitContextType = {
  habitList: HabitListType;
  today: TodayDataType;
  getTodayData: () => TodayDataType;
  getList: () => HabitListType;
  updateList: (data: HabitListType) => void;
  updateToday: (
    data: TodayDataType,
    completed: boolean,
    habitCompleted: string
  ) => void;
  resetToday: (newDate: string) => TodayDataType;
  fetched: boolean;
};

const habitContext = createContext({} as HabitContextType);

const HabitContextProvider: React.FC = ({ children }) => {
  const [habit, setHabit] = useState({} as HabitsType);
  const [fetched, setFetched] = useState(false);
  const { setLoadingData } = useLoading();
  const auth = getAuth();
  const userEmail = auth.currentUser.email;

  const fetchFromStore = async () => {
    try {
      setLoadingData(true);
      const token = await getIdToken(auth.currentUser);
      const result = await fetch(
        `/api/habitpuppy/habits?token=${token}&user=${userEmail}`
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
    fetchFromStore();
  }, []);

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

  const updateList = async (data: HabitListType) => {
    const temp = { ...habit, habitList: data };
    try {
      setLoadingData(true);
      const token = await getIdToken(auth.currentUser);
      await fetch("/api/habitpuppy/habits", {
        method: "PUT",
        body: JSON.stringify({
          data: temp,
          token,
          user: userEmail,
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
          user: userEmail,
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
      }}
    >
      {children}
    </habitContext.Provider>
  );
};

export const useHabitContext = () => useContext(habitContext);

export default HabitContextProvider;
