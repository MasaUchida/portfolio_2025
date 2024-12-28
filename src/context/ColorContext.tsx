"use client";
import React, { useContext, createContext, useState } from "react";

//contextを作る
const ColorContext = createContext<{
  orderForColor: number;
  setOrderForColor: (order: number) => void;
} | null>(null);

//providerコンポーネント
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [order, setOrder] = useState(1);

  return (
    <ColorContext.Provider
      value={{ orderForColor: order, setOrderForColor: setOrder }}
    >
      {children}
    </ColorContext.Provider>
  );
};

//hook
export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
