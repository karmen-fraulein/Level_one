import React from "react";

const Loader = ({ loading, children }) => {
  if (loading)
    return (
      <div className="music-div">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return children;
}

export default Loader;
