import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {});
  };
  const menu_list = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      {!user ? (
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
      ) : (
        <>
        <li><Link to={"/orders"}>Orders</Link></li>
        <li>{user.email}</li>
          <li onClick={handleLogOut}>
            <button>Log Out</button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-32 border-b border-b-black border-b-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu_list}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu_list}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-warning">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
