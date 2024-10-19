import React from "react";

interface SeparatorProps {
  orientation: "horizontal" | "vertical";
  size?: string; // Define a espessura
  length?: string; // Define o comprimento
  className?: string; // Define a classe CSS
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation,
  size = "1px",
  length = "40px",
  className,
}) => {
  const separatorStyle =
    orientation === "horizontal"
      ? { width: length, height: size, backgroundColor: "#ccc" }
      : { width: size, height: length, backgroundColor: "#ccc" };

  return <div style={separatorStyle} className={className}></div>;
};

export default Separator;
