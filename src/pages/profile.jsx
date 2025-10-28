import { Input } from "@/components/ui/input";
import { getUserById } from "@/reducers/reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePage() {
  const data = useSelector((state) => state.crud.userById);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  return (
     <div className="p-10">
      <div className="text-sm text-gray-500 mb-6 flex gap-2">
        <span className="cursor-pointer hover:underline">Home</span>
        <span>/</span>
        <span className="cursor-pointer hover:underline">My Account</span>
      </div>

      <div className="flex">
        <div className="w-1/4 p-6 text-sm">
          <h3 className="mb-3 font-medium">Manage My Account</h3>
          <ul className="space-y-2 mb-6">
            <li className="text-red-500 font-medium cursor-pointer">
              My Profile
            </li>
            <li className="cursor-pointer">Address Book</li>
            <li className="cursor-pointer">My Payment Options</li>
          </ul>

          <h3 className="mb-3 font-medium">My Orders</h3>
          <ul className="space-y-2 mb-6">
            <li className="cursor-pointer">My Returns</li>
            <li className="cursor-pointer">My Cancellations</li>
          </ul>

          <h3 className="mb-3 font-medium">My Wishlist</h3>
        </div>

        <form className="flex-1">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-lg font-medium text-red-500 mb-4">Profile</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="First name"
                defaultValue={data?.userName}
                className="border border-gray-300 p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <input
                type="email"
                defaultValue={data?.email}
                placeholder="Email address"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Street address"
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>

            <h2 className="text-lg font-medium mb-4">Password Changes</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <input
                type="password"
                placeholder="Current password"
                className="border border-gray-300 p-2 rounded w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="New password"
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 rounded border border-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}
