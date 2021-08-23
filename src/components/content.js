import React, { Fragment } from "react";
import Card from "./card";

export const Content = ({ data }) => {
  if (data.length) {
    return (
      <div className="feed">
        {data?.length &&
          data.map((record, idx) => (
            <Fragment key={idx}>
              <Card {...record} />
            </Fragment>
          ))}
      </div>
    );
  } else {
    return <div className="no__records">No records</div>;
  }
};
