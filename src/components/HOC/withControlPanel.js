import React, { Fragment, useState } from "react";
import getSearchFn from "./searchFn";

const WithControlPanel = (Component1, Component2) => {
  const WrappedComponentWithControl = ({ data }) => {
    const [filteredFeed, setFilteredFeed] = useState(undefined);

    const searchFeed = e => {
      const searchTerm = e.target.value;
      if (searchTerm.length) {
        const searchTerm = e.target.value;
        const searchFn = getSearchFn(searchTerm);
        const filteredFeed = searchFn(data);
        setFilteredFeed(filteredFeed);
      } else {
        setFilteredFeed(undefined);
      }
    };

    return (
      <Fragment>
        <div className="control__panel">
          <input placeholder="Search" onChange={searchFeed} />
          <select>
            <option value="title">Title</option>
            <option value="dateLastEdited">Last edited</option>
          </select>
        </div>
        <Component1 data={filteredFeed || data} />
        <Component2 data={filteredFeed || data} />
      </Fragment>
    );
  };
  return WrappedComponentWithControl;
};

export default WithControlPanel;
