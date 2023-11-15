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
  const { habit, fetched, fetchFromStore, checkDate } = useHabitContext();
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    if (!fetched) {
      fetchFromStore();
      return;
    }
    checkDate();
  }, []);

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
      {habit?.habitList &&
        Object.keys(habit.habitList.habits).map((val) => (
          <>
            <HabitCard key={val} onClick={handleExpandMain}>
              <h3>{val}</h3>
              <div>
                <h3>
                  {habit.habitList.habits[val][`${year}`]
                    ? Object.keys(
                        habit.habitList.habits[val][`${year}`]
                      ).reduce(
                        (acc, current) =>
                          acc + habit.habitList.habits[val][`${year}`][current],
                        0
                      )
                    : 0}
                </h3>
                <RiArrowUpSFill size={"2rem"} />
              </div>
            </HabitCard>
            <ExpandedContainer>
              {habit?.habitList &&
                Object.keys(habit.habitList.habits[val])
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
                            {Object.keys(habit.habitList.habits[val][y]).reduce(
                              (acc, current) =>
                                acc + habit.habitList.habits[val][y][current],
                              0
                            )}
                          </h3>
                          <RiArrowUpSFill size={"1.5rem"} />
                        </div>
                      </Year>
                      <ExpandedContainerMonth>
                        {Object.keys(habit.habitList.habits[val][y])
                          .sort((a, b) => parseInt(b) + parseInt(a))
                          .map((m) => (
                            <ExpandedSectionMonth>
                              <div>{Months[m]}</div>
                              <div>{habit.habitList.habits[val][y][m]}</div>
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
