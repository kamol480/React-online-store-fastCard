import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "@/reducers/reducer";
import { Heart, Eye } from "lucide-react";
import { PostInCart } from "@/reducers/reducer";
import { Link } from "react-router";
const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector((store) => store.crud.products);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
      {data &&
        data.slice(0, 2).map((e) => (
          <div
            key={e.id}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -40%
            </span>
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={16} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Link to="/Info">
                <Eye size={16} />
                </Link>

              </button>
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
                <span className="text-lg font-bold text-red-600">$120</span>
                <span className="text-sm line-through text-gray-400">$160</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {"★".repeat(5)}
                <span className="ml-1 text-gray-500 text-xs">(88)</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={()=>dispatch(PostInCart(e.id))} className="w-full bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Card;
