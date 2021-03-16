import React from "react";
import { LIST_KURS } from "../list-money-exchange/list-money-exchange.const";

type CardProps = {
  title: string;
  value: string;
};

const Card = ({ title, value }: CardProps) => {
  console.log(title, value);

  const itungan = parseInt(value) * 2.0;
  const found = LIST_KURS.find((element) => element.contry === title);

  return (
    <div className="card mt-3">
      <h5 className="card-header">{title}</h5>
      <div className="card-body d-flex justify-content-between">
        <div className="d-flex">
          <img src={found?.image} alt="flag" />

          <div className="ml-3 font-weight-bold">{found?.code}</div>
        </div>
        <h5 className="card-title">{value}</h5>
        <p className="card-text">{itungan}</p>
      </div>
    </div>
  );
};

export default Card;
