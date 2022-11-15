import styles from "./styles.module.scss";

import Marquee from "react-fast-marquee";
import { CompanyStatistic } from "../../../core/types";
import StatisticForCompany from "./statictic-for-company";
import { useContext } from "react";
import { Stats } from "../../../pages";

// const statictics: CompanyStatistic[] = [
//   {
//     growth: "down",
//     company: "DOV JONES",
//     value: 20.869,
//     points: [0, 5, 7, 12, 6, 2],
//   },
//   {
//     growth: "up",
//     company: "XU 100",
//     value: 20.869,
//     points: [0, 4, 7, 12, 15],
//   },
//   {
//     growth: "up",
//     company: "BIST BANKS",
//     value: 152.421,
//     points: [0, 4, 7, 12, 15, 21, 22, 43, 50, 10, 21],
//   },
//   {
//     growth: "up",
//     company: "VIOP",
//     value: 111.113,
//     points: [0, 4, 7, 12, 15, 10, 46, 30, 34],
//   },
//   {
//     growth: "up",
//     company: "DOLCE & GABBANA",
//     value: 501.736,
//     points: [5, 3, 25, 16, 20, 40, 3, 64],
//   },
//   {
//     growth: "down",
//     company: "MICROSOFT",
//     value: 5.869,
//     points: [20, 7, 10, 2, 36, 47, 8],
//   },
//   {
//     growth: "down",
//     company: "APPLE",
//     value: 12.869,
//     points: [60, 32, 21, 24, 10, 1, 30, 67, 69, 50, 40, 34, 21],
//   },
// ];

const Footer = () => {
  const statictics = useContext(Stats);

  return (
    <footer className={styles.footer}>
      <Marquee gradient={false} className={styles.marquee}>
        {statictics &&
          statictics.map((statistic, index) => (
            <StatisticForCompany key={index} data={statistic} />
          ))}
      </Marquee>
    </footer>
  );
};

export default Footer;
