import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

// import { Container } from './styles';

const AdminPage: React.FC = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/admin/login");
  }, [authUser, loading]);

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {!loading && authUser && (
        <>
          <h1>This will be the admin panel</h1>
          <button onClick={signOut}>SignOut</button>
        </>
      )}
    </div>
  );
};

export default AdminPage;
