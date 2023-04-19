import { useEffect, useState } from "react";
import axios from "axios";
import { addToCart } from "./Products";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="product">
        {products.map((product) => (
          <div className="items" key={product.id}>
            <div className="img">
              <img src={product.image} alt="" />
            </div>
            <div className="title">{product.title}</div>
            <div className="cartButt">
              <p className="price">{product.price}$</p>
              <form className="form" onSubmit={(e) => addToCart(e, product)}>
                <button type="submit">Add To Cart</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
