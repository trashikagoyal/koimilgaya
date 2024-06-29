import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfull");
    navigate("/login");
    setUser(null);
  };

  const checkAuth = async () => {
    const res = await axios.get("http://localhost:5000/api/checkAuth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.data;
    if (data.success === true) {
      setUser(data.data);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex p-5 flex-col md:flex-row justify-between items-center">
      <div className="flex gap-3">
        <img
          src={user?.profile}
          alt={user?.name}
          width={40}
          height={30}
          className={`rounded-full shadow-inner ${
            user?.profile ? "block " : "hidden"
          }`}
        />
        <h2 className="text-3xl font-serif font-bold text-center text-white">Koi Mil Gaya💖</h2>
      </div>
      {!user?.name ? (
        <ul className="flex gap-3 text-white font-ropaSans text-2xl">
          <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
            About
          </li>
          <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
            Download
          </li>
          <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
            Privacy
          </li>
        </ul>
      ) : (
        <ul className="flex gap-3 text-white font-ropaSans text-2xl">
          <Link
            to="/profile"
            className="hover:underline cursor-pointer transition-all duration-300 ease-in-out"
          >
            New
          </Link>
          <Link
            to="/profile/chats"
            className="hover:underline cursor-pointer transition-all duration-300 ease-in-out"
          >
            Chats
          </Link>
          {/* <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
            Friends
          </li> */}
        </ul>
      )}

      <div>
        {user?.name ? (
          <button
            onClick={handleLogout}
            className="font-ropaSans text-2xl text-black px-5 py-1 rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="font-ropaSans text-2xl text-black px-5 py-1 rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
