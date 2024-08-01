import ProductCard from "./ProductCard";

const Home = () => {
  const products = [
    {
      id: 0,
      name: "watch",
      price: 1400,
      image: "watch.jpg",
      category: "watch",
      des: "Best watch ever for you.",
    },
    {
      id: 1,
      name: "bag",
      price: 1000,
      category: "bag",

      image: "bag.webp",
      des: "Best bag ever for you.",
    },
    {
      id: 2,
      name: "iphone",
      category: "Phone",
      price: 200000,
      image: "iphone.webp",
      des: "Best iphone ever for you.",
    },
    {
      id: 3,
      name: "laptop",
      category: "laptop",
      price: 150000,
      image: "laptop.jpeg",
      des: "Best laptop ever, for you.",
    },
    {
      id: 4,
      name: "shoes",
      category: "shoes",
      price: 5000,
      image: "shoes.png",
      des: "Best shoes ever for you.",
    },
    {
      id: 5,
      name: "light shoes",
      price: 3000,
      image: "sho.jpg",
      category: "shoes",

      des: "Best light shoes ever for you.",
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-center text-4xl my-6">Product Catalog</h1>

        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6">
          {products.map((product) => (
           <ProductCard
           key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            img={product.image}
            category={product.category}
           
           />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
