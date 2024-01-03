import { classNames } from "@utils/helpers";
import React, { useMemo } from "react";

export interface IButtonProps {
  color?: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const colorClass = useMemo(() => {
    switch (props.color) {
      case "danger":
        return "bg-red-500 hover:bg-red-700";

      default:
        return "bg-primary hover:bg-primary-700";
    }
  }, [props.color]);

  return (
    <button
      className={classNames(
        colorClass,
        "text-sm text-white py-2 px-4 rounded-full transition-all duration-200",
        props.className
      )}
      style={{ minWidth: "6.5rem" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
