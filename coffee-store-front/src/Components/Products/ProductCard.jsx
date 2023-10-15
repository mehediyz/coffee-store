import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { _id, photo, name, chef, price } = data;
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={photo} />
          <div className="flex flex-col gap-2">
            <p className="text-dark font-semibold text-xl">
              Name: <span className="text-gray-300 font-normal">{name}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Chef: <span className="text-gray-300 font-normal">{chef}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Price:{" "}
              <span className="text-gray-300 font-normal">{price} Tk</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-2 pr-4">
          <button className="font-semibold bg-accent p-4 rounded-md">
            <Link to={`/view/${_id}`}>View</Link>
          </button>

          <button className="font-semibold bg-dark p-4 rounded-md text-white">
            <Link to={`/coffee/update/${_id}`}>Edit</Link>
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
