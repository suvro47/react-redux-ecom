import { useSelector, useDispatch } from "react-redux";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../Assets/logo.jpg";
//import { Link } from "react-router-dom";
import { modalOpen } from "../Actions";

import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const dispatch = useDispatch();
  return (
    <nav className="text-white bg-black ftext-lg">
      <div className="flex justify-between w-11/12 m-auto">
        <div className="flex">
          <img className="w-20 h-20" src={logo} alt="logo" />
          <div className="flex flex-col justify-center">
            {/* <Link to="/"> &nbsp; EgalMart </Link> */}
            &nbsp; eShopping
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center">
              <button
                className="h-8 px-4 pb-2"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(modalOpen());
                }}
              >
                <Badge color="secondary">
                  <ShoppingCartIcon />
                  <div className="w-6 text-base text-white bg-red-700 rounded-full">
                    {totalQuantity}
                  </div>
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
