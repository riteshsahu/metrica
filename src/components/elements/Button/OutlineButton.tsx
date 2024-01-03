import { classNames } from "@utils/helpers";
import React, { useMemo } from "react";

export interface IOutlineButtonProps {
  color?: string;
  className?: string;
}

const OutlineButton: React.FC<IOutlineButtonProps> = (props) => {
  const colorClass = useMemo(() => {
    switch (props.color) {
      case "danger":
        return "text-red-500 hover:text-red-700";

      default:
        return "border-primary text-primary hover:bg-primary hover:text-white";
    }
  }, [props.color]);

  return (
    <button
      className={classNames(
        colorClass,
        "text-sm bg-white py-2 px-4 rounded-full border-2 transition-all duration-200",
        props.className
      )}
      style={{ minWidth: "6.5rem" }}
    >
      {props.children}
    </button>
  );
};

export default OutlineButton;
