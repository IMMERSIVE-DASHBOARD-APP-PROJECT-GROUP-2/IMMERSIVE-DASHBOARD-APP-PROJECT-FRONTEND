import React, { FC } from "react";

interface ButtonProps {
  id: string;
  label?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ id, label, onClick }) => {
  return (
    <button
      id={id}
      className="btn bg-alta-blue hover:bg-alta-orange text-white shadow-lg w-3/5 rounded-3xl m-5"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
