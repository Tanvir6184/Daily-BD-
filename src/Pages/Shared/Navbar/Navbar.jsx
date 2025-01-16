import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/Auth Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link>
          <a>Add Articles</a>
        </Link>
      </li>
      <li>
        <Link>
          <a>Subscriptions</a>
        </Link>
      </li>
      <li>
        <Link>
          <a>Dashboard</a>
        </Link>
      </li>
      <li>
        <Link>
          <a>My Articles</a>
        </Link>
      </li>
      <li>
        <Link>
          <a>Premium Articles</a>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {user ? (
        <>
          <div className="navbar-end">
            <div className="">
              <Link>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </Link>
            </div>
            <div className="">
              <Link>
                <a className="btn">image</a>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end">
            <div className="">
              <Link to="/login">
                <a className="btn">Login</a>
              </Link>
            </div>
            <div className="">
              <Link to="/register">
                <a className="btn">Sign Up</a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
