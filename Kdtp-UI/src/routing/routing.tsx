import RoutingPaths from "./routingConstants.ts";
import UserForm from "../views/userForm/UserForm.tsx";
import Dashboard from "../views/dashboard/Dashboard.tsx";
import { Route, Routes } from "react-router";

export const MainRouting = () => {
  return (
    <Routes>
      <Route path={RoutingPaths.join} element={<UserForm />} />
      <Route path={RoutingPaths.dashboard} element={<Dashboard />} />
    </Routes>
  );
};
