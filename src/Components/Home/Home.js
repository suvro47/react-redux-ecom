import ProductList from "../Product/ProductList";
import CartList from "../Cart/CartList";

function Home() {
  return (
    <div className="Home">
      <ProductList />
      <CartList />
    </div>
  );
}

export default Home;
