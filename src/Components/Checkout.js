import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Purchese() {
  const cartItems = useSelector((state) => state.cartItems);
  let cost = 1;

  return (
    <>
      <div className="h-screen mt-8 font-sans font-medium bg-contain bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="w-1/2 m-auto border">
          <ul className="flex justify-between p-2">
            <li className="w-auto m-auto mt-0 rounded"> SL NO</li>
            <li className="flex justify-center m-auto mt-0 rounded w-52 ">
              Title
            </li>
            <li className="w-auto m-auto mt-0 rounded"> Price</li>
            <li className="w-auto m-auto mt-0 rounded">Quantity</li>
          </ul>
        </div>

        {cartItems.map(
          ({ title, price, quantity }, index) =>
            (quantity > 0 ? true : false) && (
              <div className="w-1/2 m-auto border" key={index}>
                <ul className="flex justify-between p-2">
                  <li className="w-2 m-auto mt-0 rounded"> {index + 1}</li>
                  <li className="flex m-auto mt-0 rounded w-52">
                    {title}
                  </li>
                  <li className="w-auto m-auto mt-0 rounded"> {price}</li>
                  <li className="w-auto m-auto mt-0 rounded">{quantity}</li>
                </ul>
              </div>
            )
        )}

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
