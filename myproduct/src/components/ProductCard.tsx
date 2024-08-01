import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { useAppDispatch } from "../app/hooks";

import { addToCart } from "../features/cartSlice";

import toast from "react-hot-toast";

interface PropTypes {
  id: number;
  img: string;
  category: string;
  title: string;
  price: number;
}

const ProductCard = ({ id, img, category, title, price }: PropTypes) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const payload = {
      id,
      title,
      img,
      price,
      quantity:1,
    };
    dispatch(addToCart(payload));
    toast.success("Product added to cart");
  };

  return (
    <>
      <div className="border border-gray-200">
        <div className="text-center border-b border-gray-200">
          <img src={img} alt={title} className="w-full h-48 object-cover" />
        </div>
        <div className="px-8 py-4">
          <p className="text-gray-500 text-[14px] font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiOutlineStar className="text-gray-300" />
            </div>
            <p className="text-lg font-semibold">${price}</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-black text-white px-6 py-2 rounded-md"
          >
            <AiOutlineShoppingCart className="mr-2" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
