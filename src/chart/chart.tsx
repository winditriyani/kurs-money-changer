import React, { FunctionComponent, useState, useEffect } from "react";
import useGlobalAPI from "../shared/global-service";

const Chart = () => {
  const [currentDollar, setCurrentDollar] = useState<string>("");
  const { BaseAPI } = useGlobalAPI();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    BaseAPI.get("2021-01-27").then(getData);
  };

  const getData = (res: any) => {
    const { data } = res;
    setCurrentDollar(data.rates?.IDR);
    console.log(data);
  };

  console.log(currentDollar);

  return (
    <div>
      <h6>1 United States Dollar equals</h6>
      <h2>{currentDollar}</h2>
      <div className="row justify-content-md-center">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-primary">
            Weekly
          </button>
          <button type="button" className="btn btn-outline-primary">
            Monthly
          </button>
          <button type="button" className="btn btn-outline-primary">
            Yearly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart;
