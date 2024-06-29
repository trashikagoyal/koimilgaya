import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-white flex justify-center items-center flex-col h-[90vh] gap-8">
      <h1 className="text-4xl md:text-8xl font-concertOne text-black">
        Try Koi Mil Gaya...
      </h1>
      <Link to={`/signup`} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... font-ropaSans text-xl text-white px-3 py-2 rounded-full hover:bg-primaryLight transition-all duration-300 ease-in-out">
        Create account
      </Link>
    </div>
  );
};

export default Home;
