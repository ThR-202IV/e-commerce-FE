import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-600">
        Subscribe now and get 20% OFF
      </p>
      <p className="text-gray-500 mt-1 text-sm">
        Discount only valid in Sri Lanka, online only at Threaded, valid for 14
        days.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="email@example.com"
          required
        />
        <button
          className="bg-[#5a189a] text-white text-xs px-10 py-4 hover:bg-[#7b2cbf]"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
