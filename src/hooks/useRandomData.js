import { useEffect, useState } from "react";
import randomDataApi from "../apis/random-data-api";

const useRandomData = () => {
  const [data, setData] = useState([]);

  const fetchData = async (dataPointsAmount) => {
    const response = await randomDataApi.get(
      `number/random_number?size=${dataPointsAmount}`
    );

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, fetchData];
};

export default useRandomData;
