import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import HomePage from "../../features/home/HomePage";
import AcitivityDashboard from "../../features/acitivities/dashboard/AcitivityDashboard";
import ActivityForm from "../../features/acitivities/forms/ActivityForm";
import ActivityDetailsPage from "../../features/acitivities/details/ActivityDetailsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <AcitivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetailsPage /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm /> },
    ],
  },
]);
