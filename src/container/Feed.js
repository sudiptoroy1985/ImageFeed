import React, { useState } from "react";
import { mockData } from "../data";
import { Content } from "../components/content";
import { Tabular } from "../tabular";
import WithControlPanel from "../components/HOC/withControlPanel";

const ContentWithControl = WithControlPanel(Content);

export const Feed = () => {
  const [data] = useState(mockData);

  return (
    <div className="container">
      <ContentWithControl data={data} />
      <Tabular data={data} />
    </div>
  );
};
