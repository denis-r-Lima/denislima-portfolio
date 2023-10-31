import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../context/AuthContext";

import { useLoading } from "../../context/LoadingContext";
import Loading from "../StyledComponents/Loading";
import { useTheme } from "styled-components";

const Wrapper: React.FC = ({ children }) => {
  const { authUser, loading } = useAuth();
  const { loadingData } = useLoading();
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    if (!loading && !authUser) router.push("/habitpuppy/login");
  }, [authUser, loading]);
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "1rem",
        backgroundColor: theme.pallet.color.backgroundSecondary,
        overflowX: "hidden",
      }}
    >
      {!loading && authUser && <div>{children}</div>}
      {(loadingData || loading) && <Loading />}
    </div>
  );
};

export default Wrapper;
