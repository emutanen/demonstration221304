import React from "react";

const TopControls = ({
  dataPointsAmount,
  graphsAmount,
  setDataPointsAmount,
  setGraphsAmount
}) => {
  return (
    <div>
      <p>Datapoints:</p>
      <button
        className="ui secondary button"
        onClick={() => setDataPointsAmount(dataPointsAmount + 5)}
      >
        {dataPointsAmount}
      </button>
      <p>Graphs:</p>
      <button
        className="ui secondary button"
        onClick={() => setGraphsAmount(graphsAmount + 1)}
      >
        {graphsAmount}
      </button>
      <br />
      {dataPointsAmount !== 10 ? (
        <button
          className="ui primary button"
          onClick={() => setDataPointsAmount(10)}
        >
          {" "}
          Fetch new data
        </button>
      ) : null}
    </div>
  );
};

export default TopControls;
