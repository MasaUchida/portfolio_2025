"use client";

import React, { useState } from "react";
import { useFilterIdContext } from "../context/FilterContext";
import { TagType } from "../../types/postType";

type PickTagType = Pick<TagType, "id" | "tagName">;
type CommponentTagType = PickTagType & {
  size?: "small" | "medium" | "large";
};

const Tag: React.FC<CommponentTagType> = ({ size = "small", ...args }) => {
  const smallStyle = "h-6 text-xs leading-6";
  const mediumStyle = "h-8 text-s leading-8";
  const largeStyle = "h-10 text-base leading-10";

  const [active, setActive] = useState(false);

  const { setFilterId } = useFilterIdContext();

  const filterHandler = () => {
    setFilterId(args.id);
    setActive(!active);
  };

  return (
    <div
      className={`px-2 font-bold rounded-full box-border ${
        active
          ? `bg-gray-900 text-white-0  border border-gray-900`
          : `bg-white-0 text-gray-900 border border-gray-900`
      } ${
        size == "small"
          ? smallStyle
          : size == "medium"
          ? mediumStyle
          : largeStyle
      }  inline-block`}
    >
      <button onClick={filterHandler}>{args.tagName}</button>
    </div>
  );
};

export default Tag;
