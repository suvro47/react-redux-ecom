import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  incrementInTotalQuantity,
  decrementInTotalQuantity,
  incrementQuantityInCartItem,
  decrementQuantityInCartItem,
} from "../../Actions";

function Product({ props }) {
  const { id, title, price, image } = props;
  const cartItems = useSelector((state) => state.cartItems);
  const fetchInfo = useSelector((state) => state.fetchInfo);
  const dispatch = useDispatch();

  const currentItem = cartItems.find((item) => item.id === id);

  return (
    <>
      <div className='flex flex-col items-stretch justify-between w-64 mt-8 ml-8 mr-8 bg-white rounded shadow-2xl'>
        <div className='flex justify-center p-8'>
          {localStorage.getItem(id) ? (
            <img
              className='w-52 h-52'
              src={`data:image/jpg;base64,${localStorage.getItem(id)}`}
              alt=''
            />
          ) : (
            <img className='w-52 h-52' src={image} alt='' />
          )}
        </div>

        <div className='pb-2 pl-8 pr-4'>
          <p> {title}</p>
          <p>
            Price : <span className='text-black-600'> $&nbsp;{price} </span>
          </p>
        </div>

        <div className='px-2 py-1 text-base rounded-b shadow-2xl bg-gradient-to-r from-gray-500 to-gray-700'>
          {!cartItems.find((item) => item.id === id) ? (
            <div className='m-auto w-28'>
              <button
                className='px-2 my-2 font-medium text-black bg-gray-200 rounded'
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(props));
                  dispatch(incrementInTotalQuantity());
                }}
              >
                Add To Cart
              </button>
            </div>
          ) : (
            <div className='text-white'>
              <div className='flex justify-between m-auto w-28'>
                <button
                  className='w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900'
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(decrementInTotalQuantity());
                    dispatch(decrementQuantityInCartItem(currentItem));
                  }}
                >
                  -
                </button>
                <div className='flex justify-center w-10 mt-1 text-lg'>
                  {currentItem.quantity}
                </div>
                <button
                  className='w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900'
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
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
