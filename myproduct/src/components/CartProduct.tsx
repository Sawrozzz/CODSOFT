import React from "react";
import { useAppDispatch } from "../app/hooks";

import { removeFromCart } from "../features/cartSlice";

interface PropType {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProduct: React.FC<PropType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  return (
    <li key={id}>
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
    </li>
  );
};
export default CartProduct;
