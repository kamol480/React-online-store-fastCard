import React, { useEffect } from "react";
import { Trash2 } from "lucide-react";
import logo from "../assets/Monitor-Cart-Small.svg";
import logo2 from "../assets/Gamepad-Cart-Small (1).svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getCategory,
  getCart,
  inc,
  dec,
  clear,
} from "../reducers/reducer";
import { Link } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();

  let products = useSelector((store) => store.crud.products);
  let categories = useSelector((store) => store.crud.categories);
  let productsInCart = useSelector((store) => store.crud.cart);
  let totalPrice = useSelector((store) => store.crud.totalPrice);

  useEffect(() => {
    dispatch(getData());
    dispatch(getCategory());
    dispatch(getCart());
  }, [dispatch]);

  console.log(productsInCart);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-4 text-[#000000] text-sm font-medium border-b pb-2 mb-6">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      <div className="grid grid-cols-4 items-center bg-white rounded-md shadow-sm mb-4 p-4">
        {productsInCart &&
          productsInCart.length > 0 &&
          productsInCart.map((e) => (
            <div
              key={e.id}
              className="col-span-4 grid grid-cols-4 items-center border-b py-4 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://store-api.softclub.tj/images/${e.product.image}`}
                  alt={e.product.productName}
                  className="w-20 h-20 object-contain"
                />
                <h1 className="font-medium">{e.product.productName}</h1>
              </div>

              <span className="text-sm font-semibold">${e.product.price}</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(inc(e.id))}
                  className="px-2 py-1 border rounded-sm"
                >
                  +
                </button>
                <p className="w-6 text-center">{e.quantity}</p>
                <button
                  onClick={() => dispatch(dec(e.id))}
                  className="px-2 py-1 border rounded-sm"
                >
                  -
                </button>
              </div>

              <div className="flex justify-between items-center gap-4">
                <span className="font-semibold">
                  ${e.product.price * e.quantity}
                </span>
                <button
                  onClick={() => dispatch(clear(e.id))}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
        <button className="border border-[#000000] px-6 py-2 text-sm font-medium text-[#000000] hover:bg-gray-100">
          Return To Shop
        </button>
        <div className="flex gap-4">
          <button className="border border-[#000000] px-6 py-2 text-sm font-medium text-[#000000] hover:bg-gray-100">
            Update Cart
          </button>
          <button
            onClick={() => dispatch(clear())}
            className="border border-[#DB4444] text-[#DB4444] px-6 py-2 text-sm font-medium hover:bg-red-50"
          >
            Remove all
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-10">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border border-[#000000] px-3 py-2 text-sm w-52"
        />
        <button className="border border-[#DB4444] bg-[#DB4444] text-white px-6 py-2 text-sm font-medium hover:bg-red-600">
          Apply
        </button>
      </div>

      <div className="mt-10 w-full md:w-[320px] ml-auto border border-[#000000] rounded-md p-5">
        <h2 className="text-lg font-semibold text-[#000000] mb-4">
          Cart Total
        </h2>
        <div className="flex justify-between mb-2 text-sm text-[#000000]">
          <span>Subtotal:</span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm text-[#000000]">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-[#000000] mt-4 mb-4">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <Link to="/checkout" >
        <button className="w-full bg-[#DB4444] text-white py-3 text-sm font-semibold hover:bg-red-600">
          Proceed to checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
