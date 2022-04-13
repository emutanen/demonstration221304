import React from "react";

const BottomControls = () => {
  return (
    <div>
      <p>Frequency:</p>
      <button className="ui disabled secondary button">10 sec</button>
      <button className="ui disabled secondary button">Enable Live View</button>
      <button className="ui disabled primary button">Export To File</button>
    </div>
  );
};

export default BottomControls;
