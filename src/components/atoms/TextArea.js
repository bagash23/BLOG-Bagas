import React from "react";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea
        className="block p-2.5 w-full text-sm text-dark rounded-lg border border-dark"
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextArea;
