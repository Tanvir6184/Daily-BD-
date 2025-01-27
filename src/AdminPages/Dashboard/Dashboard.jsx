import React from "react";
import { FaBook, FaCompactDisc, FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-blue-300">
        <ul className="text-xl text-black  menu">
          <li>
            <NavLink to="/dashboard/all-user">
              <FaUsers /> All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="all-articles">
              <FaBook /> All Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="add-publisher">
              <FaCompactDisc /> Add Publisher
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="menu w-full text-center">
        {location.pathname === "/dashboard" && (
          <Navigate to="all-articles" replace />
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
