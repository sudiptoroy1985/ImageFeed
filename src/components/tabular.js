import React from "react";

export const Tabular = ({ data }) => {
  if (data.length) {
    return (
      <div className="tabular">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>DateLastEdited</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, description, dateLastEdited }, idx) => {
              return (
                <tr key={idx}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>{dateLastEdited}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div className="no__records">No records</div>;
  }
};
