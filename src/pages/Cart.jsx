import { arr } from "./Products";

function Cart() {
  return (
    <>
      <div className="cart">
        {arr.map((product) => (
          <div className="cartDisplay" key={product.id}>
            <div className="">
              <img src={product.image} alt="" />
            </div>
            <div style={{padding: '10px'}}>
              <div>{product.title}</div>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
