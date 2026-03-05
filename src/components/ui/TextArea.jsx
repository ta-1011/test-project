import React from "react";

const TextArea = (props) => {
  return (
    <>
      <textarea
        id={props.id}
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        className="p-4 border border-gray-300 w-full"
        required
      />
    </>
  );
};

export default TextArea;
