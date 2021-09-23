import { useSelector, useDispatch } from "react-redux";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import {
  incrementInTotalQuantity,
  decrementInTotalQuantity,
  incrementQuantityInCartItem,
  decrementQuantityInCartItem,
  removeItemFromCart,
  decrementFixedQuantityInTotalQuantity,
} from "../../Actions";

function Cart({ props }) {
  const { id, title, price, image } = props;
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const currentItem = cartItems.find((item) => item.id === id);

  function calcuatePrice() {
    let totalPrice = currentItem.quantity * price;
    return totalPrice.toFixed(2);
  }

  function shortTitle(title) {
    let updatedTitle =
      title.length > 40 ? title.substring(0, 40) + "..." : title;
    return updatedTitle;
  }

  return (
    <>
      {currentItem.quantity && (
        <div className='flex p-2 mx-2 my-1 font-sans font-medium bg-white rounded shadow-2xl'>
          <div className='float-left'>
            <button
              className='px-2 py-1'
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
          <div className='flex flex-col justify-center lg:mx-4 lg:p-2'>
            {localStorage.getItem(id) ? (
              <img
                className='w-20 h-20'
                src={`data:image/jpg;base64,${localStorage.getItem(id)}`}
                alt=''
              />
            ) : (
              <img className='w-20 h-20' src={image} alt='' />
            )}
          </div>

          <div className='flex flex-col justify-center p-2 mx-4 w-36'>
            <p> {shortTitle(title)}</p>
          </div>

          <div className='flex flex-col justify-center w-36'>
            <div className='p-2 mx-4'>
              <div className='flex flex-row justify-center'>
                <button
                  className='w-10 px-2 py-1 border rounded'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(decrementInTotalQuantity());
                    dispatch(decrementQuantityInCartItem(currentItem));
                  }}
                >
                  -
                </button>
                <div className='w-10 px-2 py-1 text-center border'>
                  {currentItem.quantity}
                </div>
                <button
                  className='w-10 px-2 py-1 border rounded'
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

            <div className='p-2 mx-auto'>
              <p> $&nbsp;{calcuatePrice()} </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
