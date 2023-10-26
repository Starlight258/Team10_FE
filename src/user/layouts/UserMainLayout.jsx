import React from "react";
import { Outlet } from "react-router-dom";
import { GNB } from "../components/atoms/GNB";

const UserMainLayout = () => {
  return (
    <div className="relative h-screen">
      <div className="p-4">
        <Outlet />
      </div>
      <GNB />
    </div>
  );
};

export default UserMainLayout;
