import { useSelector, useDispatch } from "react-redux";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import {
  incrementInTotalQuantity,
  decrementInTotalQuantity,
  incrementQuantityInCartItem,
  decrementQuantityInCartItem,
  removeItemFromCart,
  decrementFixedQuantityInTotalQuantity,
} from "../Actions";

function Cart({ props }) {
  const { id, title, price, image } = props;
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const currentItem = cartItems.find((item) => item.id === id);

  function calcuatePrice() {
    let p = currentItem.quantity * price;
    return p.toFixed(2);
  }

  return (
    <>
      {currentItem.quantity > 0 && (
        <div className="flex p-2 mb-2 font-sans font-medium border rounded shadow-2xl">
          <div className="float-left">
            <button
              className="px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  decrementFixedQuantityInTotalQuantity(currentItem.quantity)
                );
                dispatch(removeItemFromCart(currentItem));
              }}
            >
              <CancelRoundedIcon />
            </button>
          </div>
          <div className="flex flex-col justify-center p-2 mx-4">
            <img className="h-28" src={image} alt="" />
          </div>

          <div className="flex flex-col justify-center p-2 mx-4">
            <p> {title}</p>
          </div>

          <div className="flex flex-col justify-center p-2 mx-4">
            <p> {price} $ </p>
          </div>

          <div className="flex flex-col justify-center p-2 mx-4">
            <div className="flex flex-row justify-center w-8">
              <button
                className="px-2 py-1 border rounded"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(decrementInTotalQuantity());
                  dispatch(decrementQuantityInCartItem(currentItem));
                }}
              >
                -
              </button>
              <div className="w-8 px-2 py-1 text-center border">
                {currentItem.quantity}
              </div>
              <button
                className="px-2 py-1 border rounded"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(incrementInTotalQuantity());
                  dispatch(incrementQuantityInCartItem(currentItem));
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center p-2 mx-4">
            <p> Cost : {calcuatePrice()} $ </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
