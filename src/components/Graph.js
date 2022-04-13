import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Graph = ({ data, limit, width, height }) => {
  if (!data) return "Loading...";
  return (
    <Sparklines
      className="graph-container"
      data={data}
      limit={limit}
      width={width}
      height={height}
      margin={5}
    >
      <SparklinesLine color="blue" />
    </Sparklines>
  );
};

export default Graph;
