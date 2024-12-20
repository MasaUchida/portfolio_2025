import React from "react";
import Tag from "../components/Tag";
import Image from "next/image";

type CardType = {
  id: string;
  imageUrl?: string;
  title: string;
  projectPeriod?: string;
  tagNames?: string[];
  description?: string;
};

const Card: React.FC<CardType> = (props) => {
  const dummyDescription =
    "イズムを持つ必要があるかどうか。かう云ふ問題が出たのですが、実を云ふと、私わたしは生憎あいにくこの問題に大分だいぶ関係のありさうな岩野泡鳴いはのはうめい氏の論文なるものを読んでゐません。だからそれに対する私の答も、幾分新潮しんてう記者なり読者なりの考と、焦点が合はないだらうと思ひます。";

  return (
    <div className="min-w-60 max-w-96">
      <Image
        src={props.imageUrl ? `${props.imageUrl}` : "/test.png"}
        alt=""
        width={640}
        height={320}
        className="rounded-3xl border-2 border-gray-900 mb-2"
      />
      <div className="mb-2">
        <div className="mb-2">
          <h3 className="text-lg font-bold">{props.title}</h3>
          <p className="text-xs">
            {props.projectPeriod
              ? `プロジェクト期間：${props.projectPeriod}`
              : "プロジェクト期間：1年"}
          </p>
        </div>
        {props.tagNames?.map((tagName, index) => {
          return (
            <Tag key={index} id="1" tagName={tagName ? tagName : "tag"}></Tag>
          );
        })}
      </div>
      <p className="text-sm font-medium leading-7">
        {props.description ? `${props.description}` : dummyDescription}
      </p>
    </div>
  );
};

export default Card;
