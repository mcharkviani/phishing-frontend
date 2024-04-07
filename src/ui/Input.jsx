import React from "react";

export function Input({
  type = "text",
  value,
  onChange,
  disabled,
  placeholder,
  required = true,
  className,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      className={className}
    />
  );
}
