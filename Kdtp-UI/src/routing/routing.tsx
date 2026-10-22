import RoutingPaths from "./routingConstants.ts";
import UserForm from "../views/userForm/UserForm.tsx";
import Dashboard from "../views/dashboard/Dashboard.tsx";
import { Route, Routes } from "react-router";
import QuestionsContext from "../views/question/QuestionsContext.tsx";
import UserAnswersContext from "../views/userAnswers/UserAnswersContext.tsx";

export const MainRouting = () => {
  return (
    <Routes>
      <Route path={RoutingPaths.join} element={<UserForm />} />
      <Route path={RoutingPaths.dashboard} element={<Dashboard />} />
        <Route path={RoutingPaths.game} element={<QuestionsContext />} />
        <Route path={RoutingPaths.user} element={<UserAnswersContext />} />
    </Routes>
  );
};
