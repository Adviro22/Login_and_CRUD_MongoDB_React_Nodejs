import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl">REGISTER</h1>
        <br />
        <form action="" onSubmit={onSubmit}>
          <div>
            <label htmlFor="">Username: </label>
            <input
              type="text"
              name="username"
              {...register("username", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="username"
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>
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
          <button type="submit">Register</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Already have a account? <Link to="/login" className="text-sky-500">Sing In</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
