import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';

function App() {
  return (
   <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/products/cart" element={<Cart />}/>
    </Routes>
    </div>
  );
}

export default App;
