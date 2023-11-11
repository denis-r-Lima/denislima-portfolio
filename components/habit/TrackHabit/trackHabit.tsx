import React, { useEffect, useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";

import { Container } from "../EditHabit/styles";
import { useHabitContext } from "../../../context/HabitContext";
import {
  ExpandedContainer,
  ExpandedContainerMonth,
  ExpandedSectionMonth,
  ExpandedSectionYears,
  Year,
  HabitCard,
} from "./styles";

type HabitListType = {
  habits: { [name: string]: { [year: string]: { [month: string]: number } } };
};

const Months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const TrackHabit: React.FC = () => {
  const { getList, fetched, fetchFromStore } = useHabitContext();
  const [habits, setHabits] = useState<HabitListType>({
    habits: {},
  });
  const date = new Date();
  // const month = date.getMonth();
  const year = date.getFullYear();

  useEffect(() => {
    if (!fetched) fetchFromStore();
  }, []);

  useEffect(() => {
    const data = getList();
    if (!data) return;
    setHabits(data);
  }, [fetched]);

  const handleExpandMain = (e: React.MouseEvent) => {
    const svg = e.currentTarget.children[1].children[1];
    svg.classList.contains("rotate")
      ? svg.classList.remove("rotate")
      : svg.classList.add("rotate");
    const toExpand = e.currentTarget.nextElementSibling;
    toExpand.classList.contains("expanded")
      ? toExpand.classList.remove("expanded")
      : toExpand.classList.add("expanded");
  };

  const handleExpandYear = (e: React.MouseEvent) => {
    const svg = e.currentTarget.children[0].children[1].children[1];
    svg.classList.contains("rotate")
      ? svg.classList.remove("rotate")
      : svg.classList.add("rotate");
    const toExpand = e.currentTarget.children[1];
    toExpand.classList.contains("expanded")
      ? toExpand.classList.remove("expanded")
      : toExpand.classList.add("expanded");
  };

  return (
    <Container>
      {Object.keys(habits.habits).map((val) => (
        <>
          <HabitCard key={val} onClick={handleExpandMain}>
            <h3>{val}</h3>
            <div>
              <h3>
                {habits.habits[val][`${year}`]
                  ? Object.keys(habits.habits[val][`${year}`]).reduce(
                      (acc, current) =>
                        acc + habits.habits[val][`${year}`][current],
                      0
                    )
                  : 0}
              </h3>
              <RiArrowUpSFill size={"2rem"} />
            </div>
          </HabitCard>
          <ExpandedContainer>
            {Object.keys(habits.habits[val])
              .sort((a, b) => parseInt(b) - parseInt(a))
              .map((y) => (
                <ExpandedSectionYears
                  key={`${val} - ${y}`}
                  onClick={handleExpandYear}
                >
                  <Year>
                    <div>{y}</div>
                    <div>
                      <h3>
                        {Object.keys(habits.habits[val][y]).reduce(
                          (acc, current) =>
                            acc + habits.habits[val][y][current],
                          0
                        )}
                      </h3>
                      <RiArrowUpSFill size={"1.5rem"} />
                    </div>
                  </Year>
                  <ExpandedContainerMonth>
                    {Object.keys(habits.habits[val][y])
                      .sort((a, b) => parseInt(b) + parseInt(a))
                      .map((m) => (
                        <ExpandedSectionMonth>
                          <div>{Months[m]}</div>
                          <div>{habits.habits[val][y][m]}</div>
                        </ExpandedSectionMonth>
                      ))}
                  </ExpandedContainerMonth>
                </ExpandedSectionYears>
              ))}
          </ExpandedContainer>
        </>
      ))}
    </Container>
  );
};

export default TrackHabit;
