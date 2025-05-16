import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './Pages/Orders';
import Navbar from './components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
import Chatbot from './components/Chatbot';


import 'react-toastify/dist/ReactToastify.css';

console.log(toast);

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />

      <Navbar />
      <SearchBar />
      <Chatbot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
