import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Brand,
  getCategory,
  getData,
  getProductByBrand,
  getProductBycategory,
  PostInCart,
} from "@/reducers/reducer";
import { Heart, Eye } from "lucide-react";
import { Link } from "react-router";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getData());
    dispatch(Brand());
  }, [dispatch]);

  let category = useSelector((store) => store.crud.categories);
  let data = useSelector((store) => store.crud.products);
  let brands = useSelector((store) => store.crud.brands);

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1400px] mx-auto p-4">
      <div className="md:w-[240px] w-full bg-white md:border-r border-gray-200 flex flex-col gap-1">
        {category &&
          category.map((e) => (
            <button
              onClick={() => dispatch(getProductBycategory(e.id))}
              key={e.id}
              className="text-left p-2 text-[15px] hover:bg-gray-100 rounded-md font-medium transition-colors"
            >
              {e.categoryName}
            </button>
          ))}
        {brands &&
          brands.map((e) => (
            <button
              onClick={() => dispatch(getProductByBrand(e.id))}
              key={e.id}
              className="text-left p-2 text-[15px] hover:bg-gray-100 rounded-md font-medium transition-colors"
            >
              {e.brandName}
            </button>
          ))}
      </div>

      <div className="flex-1 grid grid-cols-1 h-[300px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data &&
          data.map((e) => (
            <div
              key={e.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -40%
              </span>
              <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Heart
                    onClick={() => {
                      let favorite =
                        JSON.parse(localStorage.getItem("favorites")) || [];
                      favorite.push(e);
                      localStorage.setItem(
                        "favorites",
                        JSON.stringify(favorite)
                      );
                    }}
                    size={16}
                  />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Link to={`/Info/${e.id}`}>
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
                  <span className="text-lg font-bold text-red-600">
                    ${e.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    $160
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  {"★".repeat(5)}
                  <span className="ml-1 text-gray-500 text-[11px]">(88)</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => dispatch(PostInCart(e.id))}
                  className="w-full bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
