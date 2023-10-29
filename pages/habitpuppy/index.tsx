import { useRouter } from "next/router";
import React, { useEffect } from "react";

const HabitPuppy: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/habitpuppy/habitracker");
  }, []);
  return <div></div>;
};

export default HabitPuppy;
