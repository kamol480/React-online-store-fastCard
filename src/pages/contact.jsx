import React from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-[100px]">
      <div className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-6">
        <div className="flex gap-4 items-start">
          <div className="bg-[#DB4444] text-white p-3 rounded-full">
            <Phone size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Call To Us</h2>
            <p className="text-sm text-gray-600 mt-1">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm text-gray-800 mt-1">Phone: +8801611112222</p>
          </div>
        </div>
        <div className="flex gap-4 items-start pt-4 border-t">
          <div className="bg-[#DB4444] text-white p-3 rounded-full">
            <Mail size={20} />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Write To Us</h2>
            <p className="text-sm text-gray-600 mt-1">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-800 mt-1">
              Emails: customer@exclusive.com
            </p>
            <p className="text-sm text-gray-800">support@exclusive.com</p>
          </div>
        </div>
      </div>

      <form className="bg-white border rounded-md shadow-sm p-6 flex flex-col gap-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border rounded px-3 py-2 text-sm w-full resize-none focus:outline-none focus:ring-1 focus:ring-black"
        ></textarea>
        <button
          type="submit"
          className="bg-[#DB4444] text-white py-2 px-4 text-sm font-medium rounded hover:bg-red-600 w-[150px] ml-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
