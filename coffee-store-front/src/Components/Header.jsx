import { Link } from "react-router-dom";
import banner from "./../assets/images/more/3.png";

const Header = () => {
  return (
    <div className="relative">
      <img className="w-full" src={banner} />
      <div className="absolute top-0 h-full flex items-center ml-[45%] max-w-3xl px-4">
        <div className="flex flex-col items-start gap-8">
          <h1 className="font-Rancho text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-accent px-4 py-1 font-Rancho text-2xl text-dark outline outline-2 outline-accent hover:outline-white hover:text-white hover:bg-transparent transition duration-200 hover:ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
