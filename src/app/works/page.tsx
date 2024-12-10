import React from "react";
import Card from "../../components/Card";

const WorksPage: React.FC = () => {
  return (
    <>
      <main>
        <p>作品ページだよ</p>
        <div className="flex gap-12">
          <Card id="1" title="カード1"></Card>
          <Card id="1" title="カード1"></Card>
          <Card id="1" title="カード1"></Card>
        </div>
      </main>
    </>
  );
};

export default WorksPage;
