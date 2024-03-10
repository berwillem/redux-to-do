import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskslice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
