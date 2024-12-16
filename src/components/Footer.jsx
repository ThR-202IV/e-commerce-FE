import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <p className="delius-swash-caps-regular font-extrabold text-[23px] mb-3">
            Threaded
          </p>
          <p className="w-full md:w-2/3 text-gray-500">
            Your authority on fashion & the go-to retailer for the latest
            trends, styles & the hottest deals
          </p>
        </div>

        <div>
          <p className="text-lg font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>+94-123-456-7890</li>
            <li>contact.threaded@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
