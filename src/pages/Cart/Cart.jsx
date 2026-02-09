import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // O'chirish uchun ikonka

const Cart = ({ cart, setCart }) => {
  const updateCount = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, count: Math.max(1, item.count + delta) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

  return (
    <div className="container mx-auto py-10 px-4 min-h-[60vh]">
      <h1 className="text-3xl font-[1000] uppercase italic mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <p className="text-gray-500 text-xl">Savatchangiz bo'sh.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-4 border rounded-2xl relative">
                {/* Rasmni chiqarish qismi */}
                <div className="w-24 h-24 bg-[#F0EEED] rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover" 
                    alt={item.name} 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150' }} // Agar rasm chiqmasa placeholder qo'yadi
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold uppercase italic text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Size: {item.selectedSize}</p>
                  <p className="font-bold text-xl">${item.price}</p>
                </div>

                <div className="flex flex-col items-end justify-between h-24">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                  
                  <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
                    <button onClick={() => updateCount(item.id, -1)} className="font-bold text-xl">-</button>
                    <span className="font-bold">{item.count}</span>
                    <button onClick={() => updateCount(item.id, 1)} className="font-bold text-xl">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* O'ng tomon: Summary */}
          <div className="bg-white p-6 rounded-3xl h-fit border shadow-sm">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="text-black font-bold">${total}</span>
              </div>
              <div className="flex justify-between border-t pt-4 text-xl font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full mt-8 font-bold uppercase hover:bg-black/90 transition-all">
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;