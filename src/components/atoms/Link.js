import React from "react";

const Link = ({ title, onClick }) => {
  return (
    <p
      className="font-normal text-sm text-primary text-center cursor-pointer"
      onClick={onClick}
    >
      {title}
    </p>
  );
};

export default Link;
