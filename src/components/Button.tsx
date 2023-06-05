import React, { FC } from "react";

interface ButtonProps {
  id: string;
  label?: string;
}

const Button: FC<ButtonProps> = ({ id, label }) => {
  return (
    <button id={id} className="btn bg-indigo-950 shadow-lg w-1/2 rounded-3xl">
      {label}
    </button>
  );
};

export default Button;
