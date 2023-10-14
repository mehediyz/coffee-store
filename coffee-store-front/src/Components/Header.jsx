import navImg from "./../assets/images/more/15.jpg";
import logo from "./../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div className="relative h-28 overflow-hidden">
      <img className="w-full" src={navImg} />
      <div className="absolute top-0 flex gap-4 items-center justify-center h-full w-full">
        <img className="h-20" src={logo} />
        <h2 className="font-Rancho text-white text-6xl">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Header;
