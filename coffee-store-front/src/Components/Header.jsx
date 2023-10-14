import banner from "./../assets/images/more/3.png";
import icon1 from "./../assets/images/icons/1.png";
import icon2 from "./../assets/images/icons/2.png";
import icon3 from "./../assets/images/icons/3.png";
import icon4 from "./../assets/images/icons/4.png";
import FeaturesCard from "./Header/FeaturesCard";

const Header = () => {
  return (
    <>
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
      <div className="bg-gray-200">
        <div className="container mx-auto px-4 py-10 flex gap-6 justify-center">
          <FeaturesCard
            icon={icon1}
            title={"Awesome Aroma"}
            description={
              "You will definitely be a fan of the design & aroma of your coffee"
            }
          />
          <FeaturesCard
            icon={icon2}
            title={"High Quality"}
            description={
              "We served the coffee to you maintaining the best quality"
            }
          />
          <FeaturesCard
            icon={icon3}
            title={"Pure Grades"}
            description={
              "The coffee is made of the green coffee beans which you will love"
            }
          />
          <FeaturesCard
            icon={icon4}
            title={"Proper Roasting"}
            description={
              "Your coffee is brewed by first roasting the green coffee beans"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Header;
