import React, { Fragment } from "react";

const WithControlPanel = Component => {
  const wrappedComponentWithControl = ({ data }) => {
    return (
      <Fragment>
        <div className="control__panel">
          <input placeholder="Search" />
          <select>
            <option value="title">Title</option>
            <option value="dateLastEdited">Last edited</option>
          </select>
        </div>
        <Component data={data} />
      </Fragment>
    );
  };
  return wrappedComponentWithControl;
};

export default WithControlPanel;
