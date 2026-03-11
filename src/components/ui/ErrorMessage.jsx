import React from "react";

const ErrorMessage = (props) => {
  if (!props.message) {
    return null;
  }

  return <p> {props.message}</p>;
};

export default ErrorMessage;
