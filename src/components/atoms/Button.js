import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className="font-bold w-full text-md text-white bg-primary py-2 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out "
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
