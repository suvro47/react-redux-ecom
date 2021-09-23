import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import Cart from "../Cart/Cart";
import { modalClose, clearCart, clearTotalQuantity } from "../../Actions";
import { Link } from "react-router-dom";

function CartList() {
  const cartItems = useSelector((state) => state.cartItems);
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={() => dispatch(modalClose())}
      htmlOpenClassName='overflow-hidden'
      className='absolute right-0 w-full h-full p-4 overflow-scroll bg-gray-100 rounded shadow-2xl top-20 lg:w-auto md:w-auto'
    >
      <button
        className='-mt-6 -mb-10 text-3xl font-semibold'
        onClick={(e) => {
          e.preventDefault();
          dispatch(modalClose());
        }}
      >
        &times;
      </button>

      {totalQuantity ? (
        <div className='mt-4 mb-20'>
          {cartItems.map((c, index) => {
            return <Cart key={index} props={c} />;
          })}
          <div className='flex flex-row justify-center w-full p-2 m-auto lg:w-1/2'>
            <button
              className='w-auto px-2 py-2 mx-8 text-base text-white bg-red-700 rounded shadow-2xl'
              onClick={(e) => {
                e.preventDefault();
                dispatch(clearCart());
                dispatch(clearTotalQuantity());
              }}
            >
              Clear Cart
            </button>
            <button className='w-auto px-2 text-base text-white bg-green-700 rounded shadow-2xl'>
              <Link to='/checkout'> Checkout </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-row justify-between w-3/4 m-auto mt-20 mb-20 text-xl font-black text-red-900'>
          <h1> Opps !! You haven't selected any product yet :( </h1>
        </div>
      )}
    </Modal>
  );
}

export default CartList;
