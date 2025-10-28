import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbyId } from "../reducers/reducer";
import { useParams } from "react-router-dom";
import { RotateCcw, Truck } from "lucide-react";

const Info = () => {
  let { ID } = useParams();
  let dispatch = useDispatch();
  let data = useSelector((state) => state.crud.products);

  console.log(data);
  console.log(ID);

  useEffect(() => {
    dispatch(getbyId(ID));
  }, []);

  return (
    <>
      <section className="px-[5%] py-[50px] flex xl:flex-row flex-col justify-center gap-[200px] items-center">
        <aside className="p-[20px] justify-end gap-[10px] flex flex-row-reverse shadow-2xl rounded-[10px] xl:w-[700px]">
          <img
            className="rounded-[10px]  xl:w-[550px]"
            src={`https://store-api.softclub.tj/images/${data?.images?.map(
              (el) => el.images
            )}`}
            alt=""
          />
          <div className="flex flex-col justify-between ">
            <img
              className="rounded-[10px] xl:w-[120px] "
              src={`https://store-api.softclub.tj/images/${data?.images?.map(
                (el) => el.images
              )}`}
              alt=""
            />
            <img
              className="rounded-[10px] xl:w-[120px]"
              src={`https://store-api.softclub.tj/images/${data?.images?.map(
                (el) => el.images
              )}`}
              alt=""
            />
            <img
              className="rounded-[10px] xl:w-[120px]"
              src={`https://store-api.softclub.tj/images/${data?.images?.map(
                (el) => el.images
              )}`}
              alt=""
            />
            <img
              className="rounded-[10px] xl:w-[120px]"
              src={`https://store-api.softclub.tj/images/${data?.images?.map(
                (el) => el.images
              )}`}
              alt=""
            />
          </div>
        </aside>
        <aside>
          <div class="max-w-sm mx-auto border border-gray-300 rounded-lg p-5">
            <h2 class="text-xl font-semibold mb-1">Havic HV G-92 Gamepad</h2>
            <div class="flex items-center mb-2">
              <div class="flex text-yellow-400">★★★★☆</div>
              <span class="text-gray-500 ml-2">(150 Reviews)</span>
              <span class="ml-auto text-green-500 font-medium">In Stock</span>
            </div>

            <div class="text-2xl font-bold mb-2">$192.00</div>

            <p class="text-gray-600 mb-4">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <div class="mb-4">
              <span class="font-medium">Colours:</span>
              <button class="w-6 h-6 rounded-full border border-gray-400 ml-2 focus:outline-none"></button>
              <button class="w-6 h-6 rounded-full bg-red-400 border border-gray-400 ml-2 focus:outline-none"></button>
            </div>

            <div class="mb-4">
              <span class="font-medium">Size:</span>
              <div class="inline-flex ml-2 space-x-2">
                <button class="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-red-700 hover:text-white transition-all duration-500 hover:border-red-500">
                  XS
                </button>
                <button class="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-red-700 hover:text-white transition-all duration-500 hover:border-red-500">
                  S
                </button>
                <button class="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-red-700 hover:text-white transition-all duration-500 hover:bg-red-500 hover:border-red-600">
                  M
                </button>
                <button class="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-red-700 hover:text-white transition-all duration-500 hover:border-red-500">
                  L
                </button>
                <button class="px-2 py-1 border border-gray-300 rounded text-sm hover:bg-red-700 hover:text-white transition-all duration-500 hover:border-red-500">
                  XL
                </button>
              </div>
            </div>

            <div class="flex items-center mb-4 space-x-2">
              <button class="px-3 py-1 border border-gray-300 rounded">
                −
              </button>
              <span class="px-3 py-1 border border-gray-300 rounded">2</span>
              <button class="px-3 py-1 border border-gray-300 rounded">
                +
              </button>
              <button class="flex-1 bg-red-500 text-white px-4 py-2 rounded font-medium">
                Buy Now
              </button>
              <button class="border border-gray-300 px-2 py-2 rounded">
                ♥️
              </button>
            </div>

            <div class="border-t border-gray-200 pt-4 space-y-2">
              <div class="flex items-center text-gray-700">
                <Truck className="text-black" size={50} />{" "}
                <span class="ml-2">Free Delivery</span>
              </div>
              <div class="text-gray-500 text-sm">
                Enter your postal code for Delivery Availability
              </div>

              <div class="flex items-center text-gray-700 mt-2">
                <RotateCcw size={50} />{" "}
                <span class="ml-2">Return Delivery</span>
              </div>
              <div class="text-gray-500 text-sm">
                Free 30 Days Delivery Returns.{" "}
                <a href="#" class="text-blue-500 underline">
                  Details
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Info;
