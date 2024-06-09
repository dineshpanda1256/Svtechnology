import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthRoutes() {
  const { token } = useSelector((state) => state.user);

  return token ? <Navigate to="/" /> : <Outlet />;
}
