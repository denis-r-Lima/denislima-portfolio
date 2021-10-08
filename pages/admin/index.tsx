import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AdminPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/content");
  }, []);
  return <div></div>;
};

export default AdminPage;
