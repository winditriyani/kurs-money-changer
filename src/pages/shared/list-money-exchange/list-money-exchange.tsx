import React from "react";
import useListMoneyExchange from "./list-money-exchange.hook";
import { LIST_KURS } from "./list-money-exchange.const";
import { Card } from "../card";

interface exchangeMoney {
  [key: string]: any;
}

const ListMoneyExchange = () => {
  const {
    currentDollar,
    fetchLatestExchange,
    getanuan,
    addCurrencyList,
  } = useListMoneyExchange();

  const listExchange: exchangeMoney = currentDollar;

  const listCurrency = [
    {
      title: "Japanese yen",
      value: "JPY",
    },

    {
      title: "Indonesian rupiah",
      value: "IDR",
    },
    {
      title: "Thai baht",
      value: "THB",
    },
    {
      title: "US dollar",
      value: "USD",
    },
  ];

  return (
    <div className="container">
      {/* <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Action
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </div>
      </div> */}

      <div className="form-group">
        <label>All currencies quoted against : </label>
        <select
          className="form-control"
          onChange={(e) => {
            fetchLatestExchange(e.target.value);
          }}
        >
          {LIST_KURS.map((list) => (
            <option value={list.code}>{list.contry}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="text"
          className="form-control"
          placeholder="name@example.com"
          // onInput={addCurrencyList}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={getanuan}
        >
          Primary
        </button>
      </div>

      {listCurrency.map((dataCurrency) => (
        <Card
          title={dataCurrency.title}
          value={listExchange[dataCurrency.value]}
        />
      ))}
    </div>
  );
};

export default ListMoneyExchange;
