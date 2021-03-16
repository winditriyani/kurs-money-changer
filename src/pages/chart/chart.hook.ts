import React, { FunctionComponent, useState, useEffect } from "react";
import { addYears } from "date-fns";

import useGlobalAPI from "../../shared/global-service";

interface list {}

const listOfCats: list[] = [""];

const UseChart = () => {
  const [currentDollar, setCurrentDollar] = useState(listOfCats);
  const { BaseAPI } = useGlobalAPI();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => console.log(addYears(new Date(), 1));

  const getData = (res: any) => {
    const { data } = res;
    setCurrentDollar(data.rates);
    console.log(data);
  };
  return {
    currentDollar,
  };
};

export default UseChart;
