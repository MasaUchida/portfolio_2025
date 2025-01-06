"use client";

import React from "react";
import FilterTag from "../components/FilterTag";
import { TagType } from "../../types/postType";
import { useFilterIdContext } from "../context/FilterContext";

type PropType = {
  tags: TagType[];
};

const FilterTags: React.FC<PropType> = (props) => {
  const { filterId } = useFilterIdContext();

  return (
    <>
      <FilterTag
        id="all"
        tagName="All"
        size="large"
        isActive={filterId === ""}
        all
      />
      {props.tags.map((tag) => {
        return (
          <FilterTag
            key={tag.id}
            id={tag.id}
            tagName={tag.tagName}
            size="large"
            isActive={filterId === tag.id}
          />
        );
      })}
    </>
  );
};

export default FilterTags;
