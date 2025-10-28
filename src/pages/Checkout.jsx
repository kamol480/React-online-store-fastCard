import { getCart } from "@/reducers/reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/Frame 834.svg"
export default function Checkout() {
  let products = useSelector((store) => store.crud.products);
  let productsInCart = useSelector((store) => store.crud.cart);
  let totalPrice = useSelector((store) => store.crud.totalPrice);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-start gap-10 p-4 md:p-8 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Street address"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Apartment, floor, etc. (optional)"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Town/City"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border p-2 rounded"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-500" />
            <span className="text-sm">
              Save this information for faster check‑out next time
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-white p-6 shadow rounded-lg">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
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

                  <span className="text-sm font-semibold">
                    ${e.product.price}
                  </span>

                  <div className="flex items-center gap-2">
                    <p className="w-6 text-center">{e.quantity}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal:</span>
            <span>{totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>{totalPrice}</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="radio" name="payment" />
              <span>Bank</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on delivery</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border p-2 rounded"
            />
            <button className="border px-4 py-2 rounded text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
              Apply
            </button>
          </div>

          <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
