import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid d-flex justify-content-between my-2">
          <Link to="/" className='px-5 anker'>Home</Link>
          <div className="mx-3">
            <ul class="mb-0">
              <li class="">
                <Link to="/products" className="px-5 anker pt-5">Products</Link>
              </li>
              <li class="">
                <Link to="/products/cart" className="anker">cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
