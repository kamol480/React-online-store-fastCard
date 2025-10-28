import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Heart, Eye } from "lucide-react";

const Wishlist = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const moveAllToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, ...favorites];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setFavorites([]);
    localStorage.setItem("favorites", JSON.stringify([]));
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Wishlist ({favorites.length})</h1>
        {favorites.length > 0 && (
          <button
            onClick={moveAllToCart}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm"
          >
            Remove All To Cart
          </button>
        )}
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((e) => (
            <div
              key={e.id}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <button
                  onClick={() => removeFromFavorites(e.id)}
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <Heart size={16} className="text-red-500" />
                </button>
                <Link to={`/Info/${e.id}`}>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <Eye size={16} />
                  </button>
                </Link>
              </div>
              <img
                src={`https://store-api.softclub.tj/images/${e.image}`}
                alt={e.productName}
                className="w-full h-48 object-contain p-4"
              />
              <div className="p-4 flex flex-col gap-2">
                <h1 className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {e.productName}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-red-600">
                    ${e.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Wishlist;
