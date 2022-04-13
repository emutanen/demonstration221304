import React, { useEffect } from "react";
import Graph from "./Graph";
import useRandomData from "../hooks/useRandomData";

const width = 500;
const height = 180;

const GraphsArea = ({ graphsAmount, dataPointsAmount }) => {
  const [randomData, fetch] = useRandomData();
  const nonZeroNumArray = randomData.map((obj) => obj["non_zero_number"]);
  const ids = randomData.map((obj) => obj["id"]);

  useEffect(() => {
    fetch(dataPointsAmount);
  }, [dataPointsAmount]);

  return [...Array(graphsAmount)].map((entry, index) => (
    <div className="ui segment" key={index}>
      <p>{`Id: ${ids[index]}`}</p>
      <Graph
        data={nonZeroNumArray}
        limit={dataPointsAmount}
        width={width}
        height={height}
      />
    </div>
  ));
};

export default GraphsArea;
