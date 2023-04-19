import { arr } from "./Products";

function Cart() {
  return (
    <>
      <div>
        {arr.map((product) => (
          <div className="product" key={product.id}>
            <div>{product.title}</div>
            <div className="img">
              <img src={product.image} alt="" />
            </div>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
