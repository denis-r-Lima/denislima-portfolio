import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";

import AdminWrapper from "../../components/Admin/AdminWrapper";

// import { Container } from './styles';

const AdminPage: React.FC = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push("/admin/content");
  }, []);
  return <div></div>;
};

export default AdminPage;
