import React, { Fragment, useState } from "react";
import { mockData } from "../data";
import { Content } from "../components/content";
import { Tabular } from "../tabular";
import WithControlPanel from "../components/HOC/withControlPanel";

const ContentWithControl = WithControlPanel(Content);

export const Feed = () => {
  const [data] = useState(mockData);

  return (
    <Fragment>
      <ContentWithControl data={data} />
      <Tabular data={data} />
    </Fragment>
  );
};
