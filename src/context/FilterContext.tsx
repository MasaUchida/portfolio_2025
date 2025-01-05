"use client";
import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext<{
  filterId: string;
  setFilterId: (id: string) => void;
} | null>(null);

export const FilterIdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>("");

  return (
    <FilterContext.Provider value={{ filterId: id, setFilterId: setId }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterIdContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterIdContext must be used within a FilterIdProvider"
    );
  }
  return context;
};
