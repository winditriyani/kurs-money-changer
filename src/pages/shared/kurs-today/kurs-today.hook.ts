import React, { FunctionComponent, useState, useEffect } from "react";

import useGlobalAPI from "../../../shared/global-service";

const useKursToday = () => {
  const [currentDollar, setCurrentDollar] = useState("");

  const { BaseAPI } = useGlobalAPI();

  const dddd = (EventTarget: string) => {
    // event.preventDefault();
    const safeSearchTypeValue: string = EventTarget;

    BaseAPI.get("latest?symbols=" + EventTarget).then((res) =>
      getData(res, safeSearchTypeValue)
    );
  };

  const getData = (res: any, safeSearchTypeValue: any) => {
    const { data } = res;

    setCurrentDollar(data.rates[safeSearchTypeValue]);
  };

  const getCurrency = () => parseInt(currentDollar) * 2;
  return {
    currentDollar,
    getCurrency,
    dddd,
  };
};

export default useKursToday;
