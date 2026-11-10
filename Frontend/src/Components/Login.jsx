import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  //  const onSubmit = (data) => console.log(data)
  const onSubmit = async (data) => {
      const userInfo = {
        // fullname: data.fullname,
        email: data.email,
        password: data.password,
      };
      await axios
        .post("http://localhost:1000/user/login", userInfo)
        .then((res) => {
          console.log(res.data);

        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
          //  localStorage.setItem("Users",res.data);  // ya object ki form ma h hume name is chaiye to niche likha h
          // localStorage.setItem("Users", JSON.stringify(res.data.user));  
        })
       .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
    };

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none dark:bg-slate-900 dark:text-white"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

          <h3 className="font-bold text-lg">Login!</h3>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-1 border border-gray-400 rounded-md outline-none"
               {...register("email", { required: "Email is required" })}
            />
             {errors.email && <p className="text-sm text-red-700" role="alert">{errors.email.message}</p>}
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 py-1 border border-gray-400 rounded-md outline-none"
               {...register("password", { required: "Password is required" })}
            />
             {errors.password && <p className="text-sm text-red-700" role="alert">{errors.password.message}</p>}
          </div>

          <div className="flex justify-between mt-4 ">
            <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                {" "}
                Signup
              </Link>
            </p>
          </div>
          
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
