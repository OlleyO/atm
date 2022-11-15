import { CompanyStatistic } from "../../../../core/types";

import { ArrowDropDown } from "@mui/icons-material";

import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import { Line, LineChart } from "recharts";

interface Props {
  data: CompanyStatistic;
}

const StatisticForCompany: React.FC<Props> = ({ data }) => {
  const { growth, company, value, points } = data;

  const dataForGraph = points.map((value, name) => ({ name, value }));

  const growsUp = growth === "up";

  return (
    <div className={styles["stat-for-company-container"]}>
      <ArrowDropDown
        fontSize="large"
        className={growsUp ? styles["arrow-growth"] : styles["arrow-recession"]}
      />
      <div className={styles["text-container"]}>
        <Typography>{company}</Typography>
        <Typography>{value}</Typography>
      </div>
      <LineChart width={100} height={16} data={dataForGraph}>
        {!growsUp ? (
          <defs>
            <linearGradient
              id="gradient-fill1"
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#99ff61" />

              <stop offset="0.14285714285714285" stopColor="#beea3c" />

              <stop offset="0.2857142857142857" stopColor="#d9d420" />

              <stop offset="0.42857142857142855" stopColor="#eebd17" />

              <stop offset="0.5714285714285714" stopColor="#fca526" />

              <stop offset="0.7142857142857142" stopColor="#ff8d39" />

              <stop offset="0.8571428571428571" stopColor="#ff764d" />

              <stop offset="1" stopColor="#ff6161" />
            </linearGradient>
          </defs>
        ) : (
          <defs>
            <linearGradient
              id="gradient-fill2"
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ff6161" />

              <stop offset="0.14285714285714285" stopColor="#ff764d" />

              <stop offset="0.2857142857142857" stopColor="#ff8d39" />

              <stop offset="0.42857142857142855" stopColor="#fca526" />

              <stop offset="0.5714285714285714" stopColor="#eebd17" />

              <stop offset="0.7142857142857142" stopColor="#d9d420" />

              <stop offset="0.8571428571428571" stopColor="#beea3c" />

              <stop offset="1" stopColor="#99ff61" />
            </linearGradient>
          </defs>
        )}
        <Line
          dot={false}
          type="monotone"
          dataKey={"value"}
          stroke={`url(#gradient-fill${!growsUp ? "1" : "2"}`}
        />
      </LineChart>
    </div>
  );
};

export default StatisticForCompany;
