

// <div id="parent">
// <div id="child">
// <h1>I am manish</h1>
// <h1>I am manish</h1>
// </div>
// </div>
// 
// ReactElement(Object) => HTML(Boswers Understants)
// 


const parent = React.createElement(
    "h1", 
    {id:"parent"}, 
   [ React.createElement("div", {id:"child"},
    [React.createElement("h1", {}, "hellow Manish"),
        React.createElement("h3", {}, "hellow Manish")]
),
React.createElement("div", {id:"child2"},
    [React.createElement("h1", {}, "hellow Manish"),
        React.createElement("h3", {}, "hellow Manish")]
)]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

