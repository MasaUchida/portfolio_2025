"use client";

import React from "react";
import { TagType } from "../../types/postType";

type PickTagType = Pick<TagType, "id" | "tagName">;
type CommponentTagType = PickTagType & {
  size?: "small" | "medium" | "large";
  clickable?: boolean;
};

const Tag: React.FC<CommponentTagType> = ({ size = "small", ...args }) => {
  const smallStyle = "h-6 text-xs leading-6";
  const mediumStyle = "h-8 text-s leading-8";
  const largeStyle = "h-10 text-base leading-10";

  return (
    <div
      className={`px-2 font-bold rounded-full bg-white-0 text-gray-900 border border-gray-900 ${
        size == "small"
          ? smallStyle
          : size == "medium"
          ? mediumStyle
          : largeStyle
      }  inline-block`}
    >
      {`${args.tagName}`}
    </div>
  );
};

export default Tag;
