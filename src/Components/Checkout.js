import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Purchese() {
  const cartItems = useSelector((state) => state.cartItems);
  let cost = 0;

  // total cost calculation
  for (let i = 0; i < cartItems.length; i++) {
    cost += cartItems[i].price * cartItems[i].quantity;
  }

  return (
    <>
      <div className="h-screen mt-8 font-sans font-medium bg-contain bg-gradient-to-r from-gray-100 to-gray-200">
        {cartItems.map(({ title, price, quantity }, index) => (
          <div
            className="w-full p-2 m-2 border lg:m-auto lg:w-1/2 md:m-2 md:p-4 lg:p-4"
            key={index}
          >
            <ul className="flex justify-between p-2">
              <li className="w-auto"> {index + 1} .</li>
              <li className="w-48">{title}</li>
              <li className="w-auto"> {price} $ </li>
              <li className="w-auto"> x </li>
              <li className="w-auto">{quantity} </li>
              <li className="w-auto"> = </li>
              <li className="w-auto">{quantity * price} $</li>
            </ul>
          </div>
        ))}

        <div className="flex justify-end w-1/2 p-2 m-auto mt-4 border">
          <hr></hr>
          Total Cost : {cost.toFixed(2)} $
        </div>

        <div className="flex flex-row justify-between w-1/2 p-2 m-auto">
          <button className="px-2 py-1 my-10 text-base text-white bg-blue-700 rounded shadow-2xl">
            <Link to="/print"> Print </Link>
          </button>
          <button className="px-2 py-1 my-10 text-base text-white bg-green-700 rounded shadow-2xl">
            <Link to="/purchese_request"> Purchese </Link>
          </button>
        </div>
      </div>
    </>
  );
}
