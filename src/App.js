import "./styles.css";
import React from "react";

var shoppingList = ["milk", "eggs", "bread", "flowers"];

function getBg(index) {
  if (index % 2 === 0) {
    return "green";
  }
  return "yellow";
}

function listItemClickhandler(item) {
  console.log("clicked", item);
}

export default function App() {
  return (
    <div className="App">
      <h1>Print my shopping list</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listItemClickhandler(item)}
              style={{ backgroundColor: getBg(index), padding: "3px" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
