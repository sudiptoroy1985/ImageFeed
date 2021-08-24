import React, { Fragment, useState, useEffect } from "react";
import getSearchFn from "./searchFn";
import { sortFn } from "./sortFn";
import usePersister from "../../hooks/usePersister";

const WithControlPanel = (ContentComponent, TabularComponent) => {
  const WrappedComponentWithControl = ({ feed }) => {
    const [data, setData] = useState(feed);
    const [filteredFeed, setFilteredFeed] = useState(undefined);
    const [searchTerm, setSearchTerm] = usePersister("", "SearchTerm");
    const [sortTerm, setSortTerm] = usePersister("", "SortTerm");

    const searchFeed = e => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
    };

    const sortFeed = e => {
      if (e.target.value === 0) return;
      setSortTerm(e.target.value);
    };

    useEffect(() => {
      if (searchTerm.length) {
        const searchFn = getSearchFn(searchTerm);
        const filteredFeed = searchFn(data);
        setFilteredFeed(filteredFeed);
      } else {
        setFilteredFeed(undefined);
      }
    }, [searchTerm]);

    useEffect(() => {
      if (filteredFeed) {
        const sortedFilteredData = [...sortFn(filteredFeed, sortTerm)];
        setFilteredFeed(sortedFilteredData);
      } else {
        const sortedData = [...sortFn(data, sortTerm)];
        setData(sortedData);
      }
    }, [sortTerm]);

    return (
      <Fragment>
        <div className="control__panel">
          <input
            placeholder="Search"
            onChange={searchFeed}
            value={searchTerm}
          />
          <select onChange={sortFeed}>
            <option value="0">-SELECT-</option>
            <option value="name" selected={sortTerm === "name"}>
              Title
            </option>
            <option
              value="dateLastEdited"
              selected={sortTerm === "dateLastEdited"}
            >
              Last edited
            </option>
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
