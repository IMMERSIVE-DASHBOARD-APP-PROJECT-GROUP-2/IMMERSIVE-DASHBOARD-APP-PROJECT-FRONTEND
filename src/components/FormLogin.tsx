import React, { FC } from "react";

interface FormLoginProps {
  id: string;
  label?: string;
  type?: any;
  name?: string;
  value?: string | number;
  error?: string | boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormLogin: FC<FormLoginProps> = ({
  id,
  label,
  type,
  name,
  value,
  error,
  onChange,
}) => {
  return (
    <div>
      <input
        className={`input input-bordered bg-white shadow-lg w-3/5 rounded-3xl m-1 ${
          error && "border-red-600"
        }`}
        id={id}
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormLogin;
