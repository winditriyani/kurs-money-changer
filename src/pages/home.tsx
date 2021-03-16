import React from "react";
import { ListMoneyExchange } from "./shared/list-money-exchange";
import { Chart } from "./chart";

const Home = () => {
  return (
    <div className="Wrapper">
      <ListMoneyExchange />
      <Chart />
    </div>
  );
};

export default Home;
