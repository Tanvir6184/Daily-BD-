import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../Context/Auth Context/AuthContext";
import useAdmin from "../../../Hooks/useAdmin";
import ThemeToggle from "../../../Components/ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold p-2 rounded-lg ${
              isActive ? "text-white bg-yellow-950" : "hover:text-black"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold p-2 rounded-lg ${
              isActive ? "text-white bg-yellow-950" : "hover:text-black"
            }`
          }
          to="/add-articles"
        >
          Add Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold p-2 rounded-lg ${
              isActive ? "text-white bg-yellow-950" : "hover:text-black"
            }`
          }
          to="/approved-articles"
        >
          All Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold p-2 rounded-lg ${
              isActive ? "text-white bg-yellow-950" : "hover:text-black"
            }`
          }
          to="/subscription"
        >
          Subscriptions
        </NavLink>
      </li>
      {isAdmin && (
        <li>
          <NavLink
            className={({ isActive }) =>
              `font-bold p-2 rounded-lg ${
                isActive ? "text-white bg-yellow-950" : "hover:text-black"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold p-2 rounded-lg ${
              isActive
                ? "text-white bg-yellow-950"
                : "hover:text-black hover:bg-white"
            }`
          }
          to="/my-articles"
        >
          My Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold p-2 rounded-lg ${
              isActive ? "text-white bg-yellow-950" : "hover:text-black"
            }`
          }
          to="/premium-articles"
        >
          Premium Articles
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar dark:bg-gray-900 bg-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button onClick={toggleDropdown} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navOptions}
            </ul>
          )}
        </div>
        <p className="text-xl italic bg-white p-2 rounded-lg font-bold text-gray-700">
          DAILY BD
        </p>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      {/* Navbar End - User Options */}
      <div className="navbar-end">
        {user ? (
          <>
            <div className="mr-3">
              <button
                onClick={handleLogout}
                className="btn rounded-full bg-red-400"
              >
                Logout
              </button>
            </div>
            <div>
              <Link to="/my-profile">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt={user?.displayName || "User"}
                  className="rounded-full h-16 w-16"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `font-bold p-2 rounded-lg ${
                  isActive ? "text-white bg-yellow-950" : "hover:text-black"
                }`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold p-2 rounded-lg ${
                  isActive ? "text-white bg-yellow-950" : "hover:text-black"
                }`
              }
              to="/register"
            >
              Sign Up
            </NavLink>
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
