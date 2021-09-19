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
          <div className="w-1/2 m-auto border" key={index}>
            <ul className="flex justify-between p-2">
              <li className="w-auto"> {index + 1}</li>
              <li className="w-auto">{title}</li>
              <li className="w-auto"> Price : {price}</li>
              <li className="w-auto">Quantity : {quantity}</li>
              <li className="w-auto">Cost : {quantity * price}</li>
            </ul>
          </div>
        ))}

        <div className="w-1/2 m-auto mt-4 border ">
          <hr></hr>
        </div>

        <div className="flex flex-row justify-around w-1/2 p-2 m-auto">
          <div className="px-2 py-1 mx-8 my-10 text-base text-black rounded shadow-2xl">
            Total Cost : {cost.toFixed(2)} $
          </div>
          <button className="px-2 py-1 my-10 text-base text-white bg-green-700 rounded shadow-2xl">
            <Link to="/purchese_request"> Purchese </Link>
          </button>
        </div>
      </div>
    </>
  );
}
