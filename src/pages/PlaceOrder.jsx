import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { navigate, placeOrder } = useContext(ShopContext);

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-between gap-12 pt-10 px-6 min-h-[80vh] border-t border-gray-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Left Side */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
        <Title text1="DELIVERY" text2="INFORMATION" className="text-2xl" />

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
          />
          <input type="text" placeholder="Street" className="input-field" />
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="City" className="input-field" />
            <input type="text" placeholder="State" className="input-field" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Zipcode" className="input-field" />
            <input type="text" placeholder="Country" className="input-field" />
          </div>
          <input type="number" placeholder="Phone" className="input-field" />
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-12 w-full sm:max-w-[480px]">
        {/* Cart Total */}
        <div className="shadow-lg p-6 rounded-lg bg-white hover:shadow-black transition-shadow duration-300">
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div>
          <Title text1="PAYMENT" text2="METHOD" className="text-2xl" />
          <div className="flex flex-col lg:flex-row gap-6 mt-4">
            {["stripe", "razorpay", "cod"].map((method) => (
              <div
                key={method}
                onClick={() => setPaymentMethod(method)}
                className="flex items-center gap-4 border p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-black"
              >
                <div
                  className={`w-4 h-4 border rounded-full ${
                    paymentMethod === method ? "bg-black" : "bg-gray-300"
                  }`}
                ></div>
                {method === "cod" ? (
                  <p className="text-gray-500 text-sm font-medium">
                    CASH ON DELIVERY
                  </p>
                ) : (
                  <img
                    className="h-8"
                    src={assets[`${method}_logo`]}
                    alt={method}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Place Order Button */}
        <div className="w-full text-end mt-12">
          <button
            onClick={() => {
              placeOrder(paymentMethod);
              navigate("/orders");
            }}
            className="bg-black text-white px-10 py-4 text-sm font-semibold rounded-lg shadow-lg hover:shadow-black transition-all duration-300"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceOrder;
