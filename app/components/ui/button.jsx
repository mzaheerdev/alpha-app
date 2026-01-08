import React from "react";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center  disabled:opacity-50 disabled:pointer-events-none";

const variantStyles = {
    secondary:
    "bg-secondary text-black py-2 px-4 rounded-xl hover:bg-primary hover:text-white hover:cursor-pointer",
  icon:
    "w-9.5 h-9.5 rounded-[20px] p-2.5 gap-2 bg-accent text-center hover:bg-accent/60 focus:ring-accent hover:cursor-pointer ",
};

const Button = ({
  variant = "secondary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
