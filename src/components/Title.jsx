import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-[#9d4edd]">
        {text1} <span className="text-[#5a189a] font-medium">{text2}</span>
      </p>
    </div>
  );
};

export default Title;
