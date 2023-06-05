import React, { FC } from "react";

interface ButtonProps {
  id: string;
  label?: string;
}

const Button: FC<ButtonProps> = ({ id, label }) => {
  return (
    <button id={id} className="btn bg-indigo-950">
      {label}
    </button>
  );
};

export default Button;
