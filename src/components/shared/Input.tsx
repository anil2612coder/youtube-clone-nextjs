"use client";

import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  
} from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;

  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={` w-full px-4 py-2 rounded-md outline-none border-[1px] bg-zinc-800 ${
          errors[id]
            ? "border-red-500 focus:border-red-500"
            : "border-zinc-500 focus:border-blue-400"
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      />
      <label
        className={` ${
          errors[id] ? "text-red-500" : "text-zinc-500"
        }`}
        htmlFor={id}
      >
       <span className="text-gray-300">{label}</span>
      </label>
    </div>
  );
};

export default Input;