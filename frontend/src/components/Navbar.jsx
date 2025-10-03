
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 shadow-lg flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-teal-400">MyApp</div>

      {/* Nav Links */}
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-teal-400 font-semibold" : "hover:text-teal-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "text-teal-400 font-semibold" : "hover:text-teal-300"
          }
        >
          Sign Up
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-teal-400 font-semibold" : "hover:text-teal-300"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;


