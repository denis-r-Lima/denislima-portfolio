import { getAuth, getIdToken } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useLoading } from "./LoadingContext";

type TodayDataType = {
  date: string;
  habits: string[];
  completed: string[];
  notCompleted: string[];
};
type HabitListType = {
  habits: { [name: string]: { [year: string]: { [month: string]: number } } };
  perfectDays: number;
};

type HabitsType = { habitList: HabitListType; today: TodayDataType };

type HabitContextType = {
  habit: HabitsType;
  updateToday: (
    data: TodayDataType,
    completed: boolean,
    habitCompleted: string
  ) => void;
  resetToday: (newDate: string) => Promise<HabitsType | null>;
  fetched: boolean;
  fetchFromStore: () => void;
  checkDate: () => void;
  editList: (data: {
    editing: string;
    changed: string;
  }) => Promise<HabitsType | null>;
  deleteHabit: (data: string) => Promise<HabitsType | null>;
  addHabit: (data: string) => Promise<HabitsType | null>;
};

const habitContext = createContext({} as HabitContextType);

const HabitContextProvider: React.FC = ({ children }) => {
  const [habit, setHabit] = useState({} as HabitsType);
  const [fetched, setFetched] = useState(false);
  const { setLoadingData } = useLoading();
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const fetchFromStore = async () => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
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

  const updateToday = async (
    data: TodayDataType,
    completed: boolean,
    habitCompleted: string
  ) => {
    const temp: HabitsType = { ...habit, today: data };
    if (completed) {
      if (temp.habitList.habits[habitCompleted] === undefined) {
        return;
      } else if (
        temp.habitList.habits[habitCompleted][`${year}`] === undefined
      ) {
        temp.habitList.habits[habitCompleted][`${year}`] = {};
        temp.habitList.habits[habitCompleted][`${year}`][`${month}`] = 1;
      } else if (
        temp.habitList.habits[habitCompleted][`${year}`][`${month}`] ===
        undefined
      ) {
        temp.habitList.habits[habitCompleted][`${year}`][`${month}`] = 1;
      } else {
        temp.habitList.habits[habitCompleted][`${year}`][`${month}`]++;
      }
      if (
        temp.today.completed.length ===
        Object.keys(temp.habitList.habits).length
      ) {
        temp.habitList.perfectDays++;
      }
    }
    setLoadingData(true);
    setTimeout(() => {
      updateData(temp);
    }, 1000);
  };

  const resetToday = async (newDate: string): Promise<HabitsType | null> => {
    const tempToday: TodayDataType = {
      date: newDate,
      habits: Object.keys(habit.habitList.habits),
      completed: [],
      notCompleted: [],
    };
    const temp: HabitsType = { ...habit, today: tempToday };
    return updateData(temp);
  };

  const checkDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const todayDate = [month, day, year].join("-");
    if (todayDate != habit.today.date) {
      fetchFromStore();
    }
  };

  const updateData = async (data: HabitsType): Promise<HabitsType | null> => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    return new Promise(async (resolve, reject) => {
      try {
        setLoadingData(true);
        const token = await getIdToken(auth.currentUser);
        await fetch("/api/habitpuppy/habits", {
          method: "PUT",
          body: JSON.stringify({
            data: data,
            token,
            user: userId,
          }),
        });
        setHabit(data);
        resolve(data);
      } catch (e) {
        console.error(e);
        reject(null);
      } finally {
        setLoadingData(false);
      }
    });
  };

  const editList = async (data: {
    editing: string;
    changed: string;
  }): Promise<HabitsType | null> => {
    const completed = habit.today.completed.reduce((acc, value) => {
      if (value === data.editing) return [...acc, data.changed];
      return [...acc, value];
    }, []);
    const pending = habit.today.habits.reduce((acc, value) => {
      if (value === data.editing) return [...acc, data.changed];
      return [...acc, value];
    }, []);
    const incomplete = habit.today.notCompleted.reduce((acc, value) => {
      if (value === data.editing) return [...acc, data.changed];
      return [...acc, value];
    }, []);
    const tempToday: TodayDataType = {
      ...habit.today,
      completed: completed,
      notCompleted: incomplete,
      habits: pending,
    };
    const temp: HabitsType = {
      today: tempToday,
      habitList: {
        ...habit.habitList,
        habits: {
          ...habit.habitList.habits,
          [data.changed]: habit.habitList.habits[data.editing],
        },
      },
    };
    delete temp.habitList.habits[data.editing];

    return updateData(temp);
  };

  const deleteHabit = async (data: string): Promise<HabitsType | null> => {
    const completed = habit.today.completed.filter((value) => value != data);
    const pending = habit.today.habits.filter((value) => value != data);
    const incomplete = habit.today.notCompleted.filter(
      (value) => value != data
    );
    const tempToday: TodayDataType = {
      ...habit.today,
      completed: completed,
      notCompleted: incomplete,
      habits: pending,
    };
    const temp: HabitsType = { ...habit, today: tempToday };
    delete temp.habitList.habits[data];
    return updateData(temp);
  };

  const addHabit = async (data: string): Promise<HabitsType | null> => {
    const temp: HabitsType = {
      ...habit,
      habitList: {
        ...habit.habitList,
        habits: { ...habit.habitList.habits, [data]: {} },
      },
      today: { ...habit.today, habits: [...habit.today.habits, data] },
    };
    return updateData(temp);
  };

  return (
    <habitContext.Provider
      value={{
        habit,
        updateToday,
        resetToday,
        fetched,
        fetchFromStore,
        checkDate,
        editList,
        deleteHabit,
        addHabit,
      }}
    >
      {children}
    </habitContext.Provider>
  );
};

export const useHabitContext = () => useContext(habitContext);

export default HabitContextProvider;
