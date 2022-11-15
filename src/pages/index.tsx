import type { NextPage } from "next";
import { createContext, useEffect, useState } from "react";
import {
  Balance,
  CompanyStatistic,
  CreditCard,
  FetchedData,
  Payment,
  Progress,
  SendTo,
  Transaction,
} from "../core/types";
import useInterval from "../hooks/use-interval";
import HomeView from "../views/home";

export const Stats = createContext<CompanyStatistic[]>([]);

const Home: NextPage = () => {
  const [data, setData] = useState<FetchedData | null>(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  useInterval(async () => {
    const data = await fetchData();
    setData(data);
  }, 30000);

  const fetchData = async () => {
    const data = await fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json().then((data: FetchedData) => data));

    return data;
  };

  return (
    data && (
      <Stats.Provider value={data.companyStatistics}>
        <HomeView
          balances={data.balances}
          progresses={data.progresses}
          creditCards={data.creditCards}
          sendTo={data.sendTo}
          payments={data.payments}
          transactions={data.transactions}
        />
      </Stats.Provider>
    )
  );
};

export default Home;
