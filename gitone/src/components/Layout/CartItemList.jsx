import React from "react";

const CartItemList = ({ item, onRemoveItem, onUpdateQuantity }) => {
  return (
    <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h3 className="font-semibold text-lg">{item.code}</h3>
        <p className="text-sm text-gray-500">{item.name}</p>
        <div className="flex items-center mt-2">
          <button
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="text-lg font-bold">{item.price} AED</div>
      <button
        className="text-red-500 hover:underline ml-4"
        onClick={() => onRemoveItem(item.id)}
      >
        x
      </button>
    </div>
  );
};

export default CartItemList;
