import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoutes() {
  const Token = useSelector((state) => state.user.token);
  return Token ? <Outlet /> : <Navigate to="/" />;
}
