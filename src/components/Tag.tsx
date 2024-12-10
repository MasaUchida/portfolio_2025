import React from "react";
import { TagType } from "../../types/postType";

type PickTagType = Pick<TagType, "id" | "tagName">;
type CommponentTagType = PickTagType & {
  size?: "small" | "medium" | "large";
};

const Card: React.FC<CommponentTagType> = ({ size = "small", ...args }) => {
  return (
    <div
      className={`px-2 rounded-full border border-black ${
        size == "small" ? "h-6" : size == "medium" ? "h-8" : "h10"
      }  inline-block`}
    >
      {`${args.tagName}`}
    </div>
  );
};

export default Card;
