import React, { useState } from "react";
import GraphsArea from "./GraphsArea";
import TopControls from "./TopControls";
import BottomControls from "./BottomControls";

const App = () => {
  const [dataPointsAmount, setDataPointsAmount] = useState(5);
  const [graphsAmount, setGraphsAmount] = useState(2);

  return (
    <div className="ui segment main-container">
      <h1>Graph Demo App</h1>
      <p>
        All data from <br />{" "}
        <em>https://random-data-api.com/api/number/random_number</em>
      </p>
      <TopControls
        dataPointsAmount={dataPointsAmount}
        graphsAmount={graphsAmount}
        setDataPointsAmount={setDataPointsAmount}
        setGraphsAmount={setGraphsAmount}
      />
      <GraphsArea
        graphsAmount={graphsAmount}
        dataPointsAmount={dataPointsAmount}
      />
      <BottomControls />
    </div>
  );
};

export default App;
