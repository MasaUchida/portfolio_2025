"use client";

import React, { ReactNode } from "react";
import { useColorContext } from "../context/ColorContext";

type PropsType = {
  children: ReactNode;
  className?: string;
  colorNumber?: number;
};

const ContextualBackGround: React.FC<PropsType> = (props) => {
  const { orderForColor } = useColorContext();
  const order = orderForColor;

  //console.log(order);

  const bgColor =
    order % 4 === 1
      ? `bg-blue-${props.colorNumber ? props.colorNumber : "600"}`
      : order % 4 === 2
      ? `bg-green-${props.colorNumber ? props.colorNumber : "600"}`
      : order % 4 === 3
      ? `bg-red-${props.colorNumber ? props.colorNumber : "600"}`
      : `bg-yellow-${props.colorNumber ? props.colorNumber : "600"}`;

  return (
    <div className={props.className + " " + bgColor}>{props.children}</div>
  );
};

export default ContextualBackGround;
