import React from "react";
import clsx from "clsx";

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-9.5 h-9.5",
  lg: "w-12 h-12",
};

const Avatar = ({
  src,
  alt = "avatar",
  size = "md",
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        "rounded-full object-cover",
        sizeMap[size],
        className
      )}
      {...props}
    />
  );
};

export default Avatar;
