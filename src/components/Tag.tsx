import React from "react";
import { TagType } from "../../types/postType";

type PickTagType = Pick<TagType, "id" | "tagName">;
type CommponentTagType = PickTagType & {
  size?: "small" | "medium" | "large";
};

const Card: React.FC<CommponentTagType> = ({ size = "small", ...args }) => {
  const smallStyle = "h-6 text-xs leading-6";
  const mediumStyle = "h-8 text-s leading-8";
  const largeStyle = "h-10 text-base leading-10";

  return (
    <div
      className={`px-2 font-bold rounded-full border border-black ${
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

export default Card;
