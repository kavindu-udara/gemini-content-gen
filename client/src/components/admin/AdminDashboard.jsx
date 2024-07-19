import React from "react";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      This is admin dashboard
      <Outlet />
    </>
  );
};

export default AdminDashboard;
