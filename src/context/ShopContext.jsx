import { createContext, useEffect, useState } from "react";
import { products1 } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "NRS. ";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  let getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) {
        continue;
      }
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      if (!backendUrl) {
        setProducts(products1);
        return;
      }

      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success && Array.isArray(response.data.products)) {
        setProducts(response.data.products);
      } else {
        setProducts(products1);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts(products1);
    }
  };

  const collectOrdersFromCart = (paymentMethod = "cod") => {
    const items = [];
    for (const productId in cartItems) {
      const sizes = cartItems[productId];
      for (const size in sizes) {
        if (sizes[size] > 0) {
          items.push({
            _id: productId,
            size,
            quantity: sizes[size],
            paymentMethod,
          });
        }
      }
    }
    return items;
  };

  const placeOrder = (paymentMethod = "cod") => {
    const newOrders = collectOrdersFromCart(paymentMethod);
    if (newOrders.length === 0) {
      return;
    }
    setOrders((prev) => [...prev, ...newOrders]);
    setCartItems({});
  };

  useEffect(() => {
    getProductsData();
  }, [backendUrl]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    placeOrder,
    orders,
    navigate,
    backendUrl,
    token,
    setToken,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
