import { useEffect } from "react";
import { useTasks } from "../context/tasksContext";

function TaskPage() {

  const { getTasks } = useTasks();

  useEffect(() =>{
    getTasks()
  }, []);

  return (
    <div>
      <h1>Task Page</h1>
    </div>
  )
}

export default TaskPage