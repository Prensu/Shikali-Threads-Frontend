import { useContext } from 'react';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext';

const Orders = () => {
  const { orders, products, currency } = useContext(ShopContext);

  // Function to format the current date
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get the current date
  const currentDate = formatDate(new Date());

  return (
    <div className="pt-16 border-t container mx-auto px-4">
      <div className="mb-6 text-3xl font-semibold text-center">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">You have no orders.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => {
            const productData = products.find(
              (product) => product._id === order._id
            );

            return (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {productData.name}
                    </p>

                    <div className="flex items-center gap-5 mt-2 text-base text-gray-700">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p>Quantity: {order.quantity}</p>
                      <p>Size: {order.size}</p>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Date: <span className="font-semibold">{currentDate}</span>
                    </p>
                    <p className="mt-2 text-gray-600">
                      Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-1/2 gap-4">
                  <div className="flex items-center gap-2">
                    <p className="w-3 h-3 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base text-gray-800 font-semibold">Ready to ship</p>
                  </div>
                  <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Track Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
