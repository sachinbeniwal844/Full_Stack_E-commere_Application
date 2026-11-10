import React from "react";
import { useAuth } from "../../Context/AuthProvider";

import toast from "react-hot-toast";

function Logout() {

  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div className="dark:bg-slate-800 dark:text-white">
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer dark:bg-slate-800 dark:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
