import React, { FC } from "react";

interface FormLoginProps {
  id: string;
  label?: string;
  type?: any;
}

const FormLogin: FC<FormLoginProps> = ({ id, label, type }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        placeholder={label}
        className="input input-bordered bg-white shadow-lg w-3/5 rounded-3xl m-1"
      />
    </div>
  );
};

export default FormLogin;
