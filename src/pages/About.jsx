import React from "react";

import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Threaded is a fashion industry leader making the latest trends
            accessible to all while inspiring unique style and confidence. With
            a renewed focus on the customer experience, the brand offers high
            style designs and fashion basics with compelling values and a
            dynamic store environment.
          </p>
          <p>
            While driving innovation across e-commerce and digital to expand
            access and convenience, the brand continues to strengthen its
            positioning as today’s preferred destination for the fashionable
            consumer.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We believe that fashion should be accessible to everyone, and we're
            passionate about creating the best clothing that not only makes you
            look great but feel great too.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-1">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            You'll find no shortcuts when it comes to quality. From the fabrics
            we use to the finishing touches and final details, each style we
            sell is made from great quality and long-lasting fabrics and
            materials that you can wear from this season to the next.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>On trend:</b>
          <p className="text-gray-600">
            We've made staying up to date with the season's latest trends and
            styles easy. Taking trends, prints and colours straight from the
            high street, we work the latest fashion into shapes and styles that
            you know and love and will fit perfectly.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Service:</b>
          <p className="text-gray-600">
            Our customers are at the core of everything we do. Whether you're
            shopping in-store or online, we are here to listen and provide the
            best shopping experience possible. We've got a friendly team of
            customer service agents and local store ambassadors that are happy
            to help. Come and join the converstaion on our socials too!
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
