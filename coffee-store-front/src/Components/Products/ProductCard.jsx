import product1 from "./../../assets/images/1.png";
import product2 from "./../../assets/images/2.png";

const ProductCard = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={product1} />
          <div className="flex flex-col gap-2">
            <p className="text-dark font-semibold text-xl">
              Name:{" "}
              <span className="text-gray-300 font-normal">
                Americano Coffee
              </span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Chef:{" "}
              <span className="text-gray-300 font-normal">
                Americano Coffee
              </span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Price: <span className="text-gray-300 font-normal">100 Tk</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-2 pr-4">
          <button className="font-semibold bg-accent p-4 rounded-md">
            View
          </button>
          <button className="font-semibold bg-dark p-4 rounded-md text-white">
            Edit
          </button>
          <button className="font-semibold bg-[#EA4744] p-4 rounded-md text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
