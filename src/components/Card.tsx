import React from "react";
import { TagType } from "../../types/postType";
import Tag from "../components/Tag";
import Image from "next/image";

type CardType = {
  id: string;
  image?: string;
  title: string;
  projectPeriod?: string;
  tag?: TagType;
  description?: string;
};

const Card: React.FC<CardType> = (props) => {
  return (
    <div>
      <div className="w-60 h-32 bg-gray-300 rounded-3xl">
        <Image
          src={props.image ? `${props.image}` : "/#"}
          alt=""
          width={240}
          height={120}
        ></Image>
      </div>
      <h3 className="text-lg bold">Title</h3>
      <p>projectPeiod</p>
      <Tag id="1" tagName="tag"></Tag>
      <p>description</p>
    </div>
  );
};

export default Card;
