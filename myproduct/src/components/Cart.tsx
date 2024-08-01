import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../app/hooks";

import CartProduct from "./CartProduct";

const Cart = () => {
  const cartItem = useAppSelector((state) => state.cartReducer);

  const getTotal = () => {
    let total = 0;
    cartItem.forEach((item) => (total = total + item.price * item.quantity));
    return total;
  };
  return (
    <>
      <div className="w-full  bg-[#0000007d] ">
        <div className="max-w-[400px] w-full min-h-full bg-white p-60">
        
          <h1 className="text-center text-4xl my-6">Your Cart</h1>
          <div className="mt-6 space-y-2">
            {cartItem?.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>

          <div className="flex justify-between items-center font-medium text-xl py-4">
            <p>Total</p>
            <p>${getTotal()}</p>
          </div>
          <button className="bg-black text-white text-center w-full rounded-3xl py-2 mb-4 mt-4">
            View Cart
          </button>
          <button className="bg-black text-white text-center w-full rounded-3xl py-2 mb-4 mt-4">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
