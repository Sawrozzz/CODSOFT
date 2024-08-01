import { BsSearch, BsCart } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { useAppSelector } from "../app/hooks";
const Header = () => {
  const handleMove = (e) => {
    e.preventDefault();
    window.location.href = "/cart";
  };
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <>
      <div className="flex justify-between px-10 py-5 bg-gray-800 text-white">
        <section>
          <a href="/">E-commerce</a>
        </section>
        <section className="lg:flex hidden max-w[500px] gap-1">
          <input
            type="text"
            placeholder="Search items here....."
            className="border-2 text-gray-800  px-6 py-2 w-full rounded"
          />
          <div className="bg-blue-500 cursor-pointer text-white text-[24px] rounded grid place-items-center px-4">
            <BsSearch />
          </div>
        </section>
        <section>
          <nav>
            <ul className="flex gap-5">
              <li>
                <a  href="/">
                  <IoHomeOutline />
                </a>
              </li>

              <div className="cursor-pointer" onClick={handleMove}>
                <BsCart />
                <p
                  className="absolute top-[-1px] right-[70px] bg-red-600 w-[25px] h-[25px]
                            rounded-full text-white text-[14px] grid place-items-center"
                >
                  {cartCount}
                </p>
              </div>

              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Header;
