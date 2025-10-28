import { ModeToggle } from "@/components/mode-toggle";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Group 1116606595.svg";
import logo2 from "../assets/Cart1.svg";
import logo4 from "../assets/Wishlist.svg";
import logo3 from "../assets/user.svg";
import logo5 from "../assets/icon-mallbag.svg";
import logo6 from "../assets/user (1).svg";
import logo7 from "../assets/Icon-logout.svg";

import { Link, Outlet } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Layout = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <img src={logo} alt="Logo" className="cursor-pointer" />
          <button
            className="sm:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-8 mt-4 sm:mt-0 dark:text-gray-200`}
        >
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition-colors"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition-colors"
          >
            {t("nav.contact")}
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition-colors"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/product"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition-colors"
          >
            {t("nav.product")}
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition-colors"
          >
            {t("nav.signup")}
          </Link>
        </div>

        <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto mt-4 sm:mt-0">
          <Link to="/wishlist">
            <img
              src={logo4}
              alt="Wishlist"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
          </Link>
          <Link to="/cart">
            <img
              src={logo2}
              alt="Cart"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link to="/wishlist">
                <img
                  src={logo3}
                  alt="Wishlist"
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/profile">
                <DropdownMenuItem>
                  <img
                    className="w-5 h-5 text-white cursor-pointer hover:scale-110 transition-transform"
                    src={logo6}
                    alt=""
                  />
                  Profile
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <img
                  className="w-5 h-5 text-white cursor-pointer hover:scale-110 transition-transform"
                  src={logo5}
                  alt=""
                />
                My order
              </DropdownMenuItem>
              <DropdownMenuItem>
                <img
                  className="w-5 h-5 text-white cursor-pointer hover:scale-110 transition-transform"
                  src={logo7}
                  alt=""
                />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex gap-2 ml-0 sm:ml-6">
            <button
              onClick={() => TranslateClick("ru")}
              className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              RU
            </button>
            <button
              onClick={() => TranslateClick("en")}
              className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              EN
            </button>
          </div>
          <ModeToggle />
        </div>
      </nav>

      <main className="pt-[100px]">
        <Outlet />
      </main>
      <footer className="bg-black text-white py-10 mt-[50px]">
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <p className="text-lg font-semibold mb-4">Exclusive</p>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4 text-sm">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border-white border-[1px] text-sm flex-1 outline-none"
              />
              <button className="px-4 bg-white text-black font-bold">→</button>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Support</p>
            <p className="text-sm mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm mb-2">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Account</p>
            <p className="text-sm mb-2">My Account</p>
            <p className="text-sm mb-2">Cart</p>
            <p className="text-sm mb-2">Wishlist</p>
            <p className="text-sm mb-2">Shop</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Quick Link</p>
            <p className="text-sm mb-2">Privacy Policy</p>
            <p className="text-sm mb-2">Terms Of Use</p>
            <p className="text-sm mb-2">FAQ</p>
            <p className="text-sm mb-2">Contact</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-4">Social</p>
            <div className="flex space-x-4 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © Copyright Rimel 2022. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Layout;
