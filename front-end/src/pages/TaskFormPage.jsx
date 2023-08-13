import { useForm } from "react-hook-form";
import { useTasks } from "../context/tasksContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Titulo Tarea:</label>
        <input
          type="text"
          placeholder="title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <br />
        <label htmlFor="">Descripción:</label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        ></textarea>
        <br />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
