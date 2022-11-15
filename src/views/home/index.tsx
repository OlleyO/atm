import { ArrowDropDown } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import classNames from "classnames";
import SwiperType from "swiper";

import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import CalculatorSliderInput from "../../components/calculator-slider-input";
import Button from "../../components/common/button";
import Card from "../../components/common/card";
import Layout from "../../components/common/layout";
import TabPanel, { a11yProps } from "../../components/common/tab-panel";
import ProgressBar from "../../components/progress";
import {
  Balance,
  CreditCard,
  Payment,
  Progress,
  SendTo,
  Transaction,
} from "../../core/types";

import styles from "./styles.module.scss";
import styled from "@mui/system/styled";
import CardsSlider from "../../components/cards-slider";
import SendCard from "../../components/send-card";
import RightItem from "../../components/right-item";

interface Props {
  balances: Balance[];
  progresses: Progress[];
  creditCards: CreditCard[];
  sendTo: SendTo[];
  payments: Payment[];
  transactions: Transaction[];
}

const StyledTabItem = styled(Tab)({
  color: "#fff",
});

const HomeView: React.FC<Props> = ({
  balances,
  progresses,
  creditCards,
  sendTo,
  payments,
  transactions,
}) => {
  const [activeBalanceTab, setActiveBalanceTab] = useState(0);

  const initialSlide = Math.floor(creditCards.length / 2);
  const [activeSlide, setActiveSlide] = useState<number>(initialSlide);

  const [activeLoanTab, setActiveLoanTab] = useState(0);

  const [loanAmount, setLoanAmount] = useState(0);
  const [installmentAmount, setInstallmentAmount] = useState(0);
  const [term, setTerm] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleLoanChange = (_e: Event, value: number) => setLoanAmount(value);

  const handleInstallmentChange = (_e: Event, value: number) =>
    setInstallmentAmount(value);

  const handleTermChange = (_e: Event, value: number) => setTerm(value);

  const hanleChangeBalanceTab = (_e: React.SyntheticEvent, value: number) => {
    setActiveBalanceTab(value);
  };

  const handleChangeLoanTab = (_e: React.SyntheticEvent, value: number) => {
    setActiveLoanTab(value);
  };

  const renderBalanceTabs = () => (
    <Tabs value={activeBalanceTab} onChange={hanleChangeBalanceTab}>
      <StyledTabItem label="TL" {...a11yProps(0)} />
      <StyledTabItem label="EURO" {...a11yProps(1)} />
      <StyledTabItem label="USD" {...a11yProps(2)} />
    </Tabs>
  );
  const renderBalanceTabItems = () => {
    return (
      <>
        <TabPanel value={activeBalanceTab} index={0}>
          <div className={styles["balance-container"]}>
            <div style={{ width: "100%", height: "80%" }}>
              <ResponsiveContainer>
                <AreaChart
                  margin={{ top: 20, left: 10, right: 10 }}
                  data={balances}
                >
                  <defs>
                    <linearGradient
                      id="gradient-fill"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#5736bb" />

                      <stop offset="0.125" stopColor="#573bbe" />

                      <stop offset="0.25" stopColor="#5647c7" />

                      <stop offset="0.375" stopColor="#5557d2" />

                      <stop offset="0.5" stopColor="#5668dd" />

                      <stop offset="0.625" stopColor="#5878e8" />

                      <stop offset="0.75" stopColor="#5c86f0" />

                      <stop offset="0.875" stopColor="#6090f6" />

                      <stop offset="1" stopColor="#6294f8" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />

                  <Area
                    type="natural"
                    stroke="none"
                    dataKey={"TL"}
                    dot={{
                      stroke: "#ffffffc0",
                      strokeWidth: 7,
                      fill: "#fff",
                      width: 17,
                      height: 117,
                    }}
                    activeDot={{
                      stroke: "#ffffffc0",
                      strokeWidth: 10,
                      fill: "#fff",
                    }}
                    fill="url(#gradient-fill)"
                  />

                  <YAxis
                    hide
                    domain={[
                      0,
                      Math.max(...balances.map((elem) => elem.TL)) + 100,
                    ]}
                  />

                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const { name } = payload[0].payload;

                        const prevValue = balances.find(
                          (elem) =>
                            `${Number(elem.name)}` === `${Number(name) - 1}`
                        )?.TL;

                        const color =
                          prevValue >= payload[0].value ? "#ff6161" : "#99ff61";

                        return (
                          <div className={styles.tooltip} style={{ color }}>
                            {prevValue >= payload[0].value ? (
                              <ArrowDropDown
                                style={{
                                  color,
                                }}
                              />
                            ) : (
                              <ArrowDropDown
                                style={{
                                  transform: "rotate(180deg)",
                                  color,
                                }}
                              />
                            )}
                            <p>{`${payload[0].value} TL`}</p>
                          </div>
                        );
                      }

                      return null;
                    }}
                    allowEscapeViewBox={{ x: true, y: true }}
                    offset={-75}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.progresses}>
              {progresses.map(({ name, value }: Progress) => (
                <ProgressBar key={name} name={name} value={value} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={activeBalanceTab} index={1}>
          <p>Tab2</p>
        </TabPanel>
        <TabPanel value={activeBalanceTab} index={2}>
          <p>Tab3</p>
        </TabPanel>
      </>
    );
  };

  const renderLoanTabs = () => (
    <Tabs value={activeLoanTab} onChange={handleChangeLoanTab}>
      <StyledTabItem label="Consumer Loan" {...a11yProps(0)} />
      <StyledTabItem label="Auto Loan" {...a11yProps(1)} />
      <StyledTabItem label="Mortage" {...a11yProps(2)} />
    </Tabs>
  );

  const renderLoanTabItems = () => (
    <>
      <TabPanel value={activeLoanTab} index={0}>
        {/* TODO: Finish this tab */}
        <div className={styles["calculator-content"]}>
          <div className={classNames(styles.column, styles.sliders)}>
            <CalculatorSliderInput
              label="Loan Amount"
              value={loanAmount}
              type="amount"
              hanldeChange={handleLoanChange}
            />
            <CalculatorSliderInput
              label="Term"
              value={term}
              type="term"
              hanldeChange={handleTermChange}
            />
            <CalculatorSliderInput
              label="Installment Amount"
              value={installmentAmount}
              type="amount"
              hanldeChange={handleInstallmentChange}
            />
          </div>
          <div className={classNames(styles.column, styles["right-container"])}>
            <div className={styles["right-value-container"]}>
              <span className={styles["right-label"]}>Per annum rate</span>
              <div className={styles["flex-value-container"]}>
                <span className={styles["right-value"]}>1.55</span>
                <span>%</span>
              </div>
            </div>
            <div className={styles["right-value-container"]}>
              <span className={styles["right-label"]}>Total Cost</span>
              <div className={styles["flex-value-container"]}>
                <span className={styles["right-value"]}>608,00</span>
                <span>TL</span>
              </div>
            </div>
            <div className={styles["right-value-container"]}>
              <span className={styles["right-label"]}>Payback</span>
              <div className={styles["flex-value-container"]}>
                <span className={styles["right-value"]}>150.000,00</span>
                <span>TL</span>
              </div>
            </div>
            <div className={styles["right-button"]}>
              <span className={styles["button-label"]}>Payment Plan</span>
              <Button className={styles["resort-button"]}>Resort</Button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={activeLoanTab} index={1}>
        <p>Tab2</p>
      </TabPanel>
      <TabPanel value={activeLoanTab} index={2}>
        <p>Tab2</p>
      </TabPanel>
    </>
  );

  const renderCreditCards = () => (
    <>
      <CardsSlider
        creditCards={creditCards}
        initialSlide={initialSlide}
        activeSlide={activeSlide}
        onSlideChange={handleSlideChange}
      />
      <div className={styles["card-info"]}>
        <div className={styles["text-container"]}>
          <div className={styles.label}>Current debt</div>
          <div
            className={styles.value}
          >{`${creditCards[activeSlide].debt} TL`}</div>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles.label}>Credit Avaliable</div>
          <div className={styles.value}>
            {`${creditCards[activeSlide].creditAvailable} TL`}
          </div>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles.label}>Cut off Date</div>
          <div className={styles.date}>
            {creditCards[activeSlide].cutOffDate}
          </div>
        </div>
        <div className={styles["card-buttons"]}>
          <Button>Pay the Debt</Button>
          <Button>Activity</Button>
        </div>
      </div>
    </>
  );

  return (
    <Layout>
      <Card
        title="Balance"
        className={styles.balance}
        renderTabs={renderBalanceTabs}
        renderTabItems={renderBalanceTabItems}
      />
      <Card
        title="Loan Calculator"
        className={styles.loan}
        renderTabs={renderLoanTabs}
        renderTabItems={renderLoanTabItems}
        bodyClassName={styles["loan-body"]}
      />
      <Card
        title="Credit Cards"
        className={styles["credit-cards"]}
        bodyClassName={styles["credit-cards-body"]}
        renderBody={renderCreditCards}
      />
      <div className={styles.persons}>
        {sendTo.map((sendingTo) => (
          <SendCard
            key={`${sendingTo.name}-${sendingTo.surname}`}
            sendTo={sendingTo}
          />
        ))}
      </div>
      <div className={styles["right-part"]}>
        <RightItem data={payments} type="payment" />
        <RightItem data={transactions} type="transaction" />
      </div>
    </Layout>
  );
};

export default HomeView;
