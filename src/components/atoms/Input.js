import React from "react";

const Input = ({ label, ...resst }) => {
  return (
    <div className="block">
      <p className="text-sm font-normal text-dark mb-3">{label}</p>
      <input
        id="input-texts"
        {...resst}
        className="w-full px-3 py-2 rounded-lg border border-dark text-base "
      />
    </div>
  );
};

export default Input;
