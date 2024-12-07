import React from "react";

export default function Parallax({ type }) {
  return (
    <div className="parallax">
      <h1>{type === "services" ? "What We Do" : "What We Did ?"}</h1>
      <div className="mountains">mountains</div>
      <div className="planets">planets</div>
      <div className="stars">stars</div>
    </div>
  );
}
