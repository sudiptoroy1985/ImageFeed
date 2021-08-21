import React, { Fragment, useState } from "react";
import { mockData } from "./data";
import Card from "./card";

export const Feed = () => {
  const [data] = useState(mockData);

  return (
    <Fragment>
      <div className="control-panel">
        <input placeholder="Search" />
        <select>
          <option value="title">Title</option>
          <option value="dateLastEdited">Last edited</option>
        </select>
      </div>
      <div className="feed">
        {data.length &&
          data.map((record, idx) => (
            <Fragment key={idx}>
              <Card {...record} />
            </Fragment>
          ))}
      </div>
      <div className="table">
        <table></table>
      </div>
    </Fragment>
  );
};
