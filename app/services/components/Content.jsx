import React from "react";

import { DataService } from "@/app/data/DataService";

export const Content = ({ id }) => {
  const fetchData = DataService.find((data) => data.id === id);
  return (
    <div id="contentService">
      <div className="description">

        <p className="text"> {fetchData.description}</p>
      </div>
      
      <h1 className="title"> Ce que nous vous offrons ...</h1>
      <div className="container">
        {fetchData.features.map((item, index) => (
          <div className="item" key={index}>
            <h4>
              {" "}
              <span className="nb">{index + 1}</span>
              {item.title}
            </h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
