import React, { FunctionComponent, useState, useEffect } from "react";

import useGlobalAPI from "../shared/global-service";

interface list {}

const listOfCats: list[] = [""];

const Counter = () => {
  const [currentDollar, setCurrentDollar] = useState(listOfCats);
  const { BaseAPI } = useGlobalAPI();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => BaseAPI.get("latest").then(getData);

  const getData = (res: any) => {
    const { data } = res;
    setCurrentDollar(data.rates);
    console.log(data.rates);
  };
  return {
    currentDollar,
  };
};

export default Counter;
