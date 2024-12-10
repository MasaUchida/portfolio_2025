import React from "react";
import Card from "../../components/Card";
import Image from "next/image";
import Tag from "../../components/Tag";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WorksPage: React.FC = () => {
  return (
    <>
      <main>
        <div className="-mb-20 flex">
          <div className="p-10 w-full h-80 bg-gray-300 border-b-2 border-r-2 border-black rounded-br-3xl">
            <div className="mb-6">
              <Image
                src={"/works-title.png"}
                alt="#"
                width={448}
                height={112}
              ></Image>
            </div>
            <div className="flex gap-6">
              <span>フィルタ</span>
              <Tag id="1" tagName="Product" size="large"></Tag>
              <Tag id="2" tagName="Project" size="large"></Tag>
              <Tag id="3" tagName="WorkShop" size="large"></Tag>
            </div>
          </div>
          <div className="p-10">
            <Header />
          </div>
        </div>
        <div className="px-10 pb-10 flex gap-12 flex-wrap justify-center">
          <Card id="1" title="カード1" tagName="Product"></Card>
          <Card id="2" title="カード2" tagName="Product"></Card>
          <Card id="3" title="カード3" tagName="Product"></Card>
          <Card id="4" title="カード4" tagName="Product"></Card>
          <Card id="5" title="カード5" tagName="Product"></Card>
          <Card id="6" title="カード6" tagName="Product"></Card>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default WorksPage;
