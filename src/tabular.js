import React from "react";

export const Tabular = ({ data }) => {
  return (
    <div className="tabular">
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>DateLastEdited</th>
        </tr>
        {data.map(({ name, description, dateLastEdited }, idx) => {
          return (
            <tr key={idx}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{dateLastEdited}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
