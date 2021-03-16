import { useState, useEffect, SyntheticEvent } from "react";

import useGlobalAPI from "../../../shared/global-service";

// interface Provider {
//   key: string;
//   value: string;
// }

const useListMoneyExchange = () => {
  const [currentDollar, setCurrentDollar] = useState({});
  // const [listCurrentBase, setListCurrentBase] = useState<Provider[]>([]);

  const [addCurrencyList, setCurrencyList] = useState<string>("");

  const { BaseAPI } = useGlobalAPI();

  useEffect(() => {
    fetchLatestExchange("USD");
  }, []);

  const fetchLatestExchange = (typeCurrency: string) =>
    BaseAPI.get(`latest?base=${typeCurrency}`)
      .then(handleDataExchangeSuccess)
      .catch((error) => {
        throw error;
      });

  const handleDataExchangeSuccess = (res: any) => {
    const { rates } = res.data;
    setCurrentDollar(rates);
  };

  const getCurrency = (xx: any) => console.log(xx.IDR);

  const getanuan = (res: SyntheticEvent) => {
    console.log(res);

    // res.preventDefault();
    // const { value } = res.target;
    // console.log(value);
    // setCurrencyList(value);
  };

  return {
    currentDollar,
    getCurrency,
    fetchLatestExchange,
    getanuan,
    addCurrencyList,
  };
};

export default useListMoneyExchange;
