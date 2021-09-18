import ProductList from "./ProductList";
import CartList from "./CartList";

function Home() {
  return (
    <div className="h-auto font-sans font-medium bg-contain bg-gradient-to-r from-gray-100 to-gray-200">
      <ProductList />
      <CartList />
    </div>
  );
}

export default Home;
