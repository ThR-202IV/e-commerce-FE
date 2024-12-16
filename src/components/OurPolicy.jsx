import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <MdVerified className="m-auto mb-5 text-[42px]" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>

      <div>
        <FaExchangeAlt className="m-auto mb-5 text-[38px]" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      <div>
        <RiCustomerService2Fill className="m-auto mb-5 text-[42px]" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
