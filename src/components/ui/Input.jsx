import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={(e) => {
          return props.onChange(e.target.value);
        }}
        className="p-4 border border-gray-300 w-full"
        disabled={props.disabled}
      />
    </>
  );
};

export default Input;
