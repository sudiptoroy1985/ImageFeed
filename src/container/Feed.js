import React, { useState } from "react";
import { mockData } from "../data";
import { Content } from "../components/content";
import { Tabular } from "../components/tabular";
import WithControlPanel from "../components/HOC/withControlPanel";

const ContentWithControl = WithControlPanel(Content, Tabular);

export const Feed = () => {
  const [feed] = useState(mockData);

  return (
    <div className="container">
      <ContentWithControl feed={feed} />
    </div>
  );
};
