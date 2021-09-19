import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import Cart from "./Cart";
import { modalClose } from "../Actions";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "80px",
    bottom: "auto",
    left: "35%",
    right: "auto",
    width: "65%",
    height: "80%",
  },
};

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
      htmlOpenClassName="overflow-hidden"
      //className="absolute w-full bg-black g:w-1/2 md:w-1/2"
      style={customStyles}
    >
      <button
        className="-mt-4 text-3xl font-semibold"
        onClick={(e) => {
          e.preventDefault();
          dispatch(modalClose());
        }}
      >
        &times;
      </button>

      <div className="main-content">
        <div className="m-10">
          {cartItems.map((c, index) => {
            //cost += c.price * c.quantity;
            return <Cart key={index} props={c} />;
          })}
        </div>

        {!totalQuantity ? (
          <div className="warning">
            <div className="flex flex-row justify-between w-3/4 m-auto mt-20 text-xl font-black text-red-900">
              <h1> Opps !! You haven't selected any product yet :( </h1>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row justify-center w-1/2 p-2 m-auto">
              <button
                className="px-2 py-1 mx-8 text-base text-white bg-red-700 rounded shadow-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  //cartItems.splice(0, cartItems.length);
                }}
              >
                Clear Cart
              </button>
              <button className="px-2 py-1 text-base text-white bg-green-700 rounded shadow-2xl">
                <Link to="/checkout"> Checkout </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default CartList;
