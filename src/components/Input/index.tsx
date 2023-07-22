import { ChangeEvent, forwardRef, ForwardedRef } from "react";

type InputProps = {
  type: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
};

const Input = forwardRef(
  (
    { type = "text", value, className, placeholder, onChange }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
        className={className}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
