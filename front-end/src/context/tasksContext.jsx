import { createContext, useContext, useState } from "react";
import { createtaskRequest, getTaskRequest } from "../api/tasks";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("usetasks must be used within a TaskProvider");
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await getTaskRequest();
    console.log(res);
  };

  const createTask = async (task) => {
    const res = await createtaskRequest(task);
    console.log(res);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
