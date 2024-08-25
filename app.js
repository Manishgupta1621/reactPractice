import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
   [ React.createElement("div", {id:"child"},
    [React.createElement("h1", {}, "hellow Manish @"),
        React.createElement("h3", {}, "hellow Manish")]
),
React.createElement("div", {id:"child2"},
    [React.createElement("h1", {}, "hellow Manish"),
        React.createElement("h3", {}, "hellow Manish")]
)]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

