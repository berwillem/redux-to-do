import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import store from "./redux/store.js";
import TaskList from "./components/TaskList/TaskList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskForm></TaskForm>,
  },
  {
    path: "/list",
    element: <TaskList></TaskList>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
