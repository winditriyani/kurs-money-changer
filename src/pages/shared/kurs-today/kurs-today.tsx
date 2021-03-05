import React from "react";
import useKursToday from "./kurs-today.hook";
import { LIST_KURS } from "./kurs-today.const";

const KursToday = () => {
  const { currentDollar, dddd, getCurrency } = useKursToday();

  return (
    <div className="container">
      <select
        onChange={(e) => {
          dddd(e.target.value);
        }}
      >
        <option value=""></option>
        {LIST_KURS.map((list) => (
          <option value={list.code}>{list.contry}</option>
        ))}
      </select>
      <input value={2} />
      <h6>1 United States Dollar equals</h6>
      {currentDollar}
      <div>ini dia {getCurrency()}</div>
    </div>
  );
};

export default KursToday;
