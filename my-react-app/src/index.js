import React from "react";
import ReactDOM from "react-dom";
//jsx
const myfirstelement = (
  <div>
    <h1>Hello React!</h1>
    <p>I use JSX</p>
  </div>
);

//without jsx

const myElement = React.createElement("h2", {}, "I do not use JSX!");
//const createChild = document.getElementById("root").appendChild(myElement);
ReactDOM.render(myfirstelement, document.getElementById("root"));
//ReactDOM.render(createChild, document.getElementById("root"));
