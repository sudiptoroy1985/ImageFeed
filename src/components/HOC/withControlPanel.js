import React, { Fragment, useState } from "react";
import getSearchFn from "./searchFn";
import { sortFn } from "./sortFn";

const WithControlPanel = (ContentComponent, TabularComponent) => {
  const WrappedComponentWithControl = ({ feed }) => {
    const [data, setData] = useState(feed);
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

    const sortFeed = e => {
      if (e.target.value === 0) return;
      const sortTerm = e.target.value;
      if (filteredFeed) {
        const sortedFilteredData = [...sortFn(filteredFeed, sortTerm)];
        setFilteredFeed(sortedFilteredData);
      } else {
        const sortedData = [...sortFn(data, sortTerm)];
        setData(sortedData);
      }
    };

    return (
      <Fragment>
        <div className="control__panel">
          <input placeholder="Search" onChange={searchFeed} />
          <select onChange={sortFeed}>
            <option value="0">-SELECT-</option>
            <option value="name">Title</option>
            <option value="dateLastEdited">Last edited</option>
          </select>
        </div>
        <ContentComponent data={filteredFeed || data} />
        <TabularComponent data={filteredFeed || data} />
      </Fragment>
    );
  };
  return WrappedComponentWithControl;
};

export default WithControlPanel;
