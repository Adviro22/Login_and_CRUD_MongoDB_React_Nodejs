import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link} from 'react-router-dom'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, errors: singinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {singinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl">LOGIN</h1>
        <br />
        <form action="" onSubmit={onSubmit}>
          <div>
            <label htmlFor="">Email: </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div>
            <label htmlFor="">Password: </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">Paswword is required</p>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account? <Link to="/register" className="text-sky-500">Sing Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
