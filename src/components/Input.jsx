import React from "react";

const Input = (props) => {
  const { type, name, id, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="w-full px-4 py-2 rounded outline-none text-gray-50 bg-gray-900/65 placeholder:text-gray-50/50"
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
};

export default Input;
