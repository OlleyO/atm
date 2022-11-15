import { ArrowDropDown } from "@mui/icons-material";
import classNames from "classnames";
import { Payment, Transaction } from "../../../core/types";

import styles from "./styles.module.scss";

interface Props {
  type: "payment" | "transaction";
  data: Payment | Transaction;
}

function isTransaction(data: Payment | Transaction): data is Transaction {
  return (data as Transaction).growth !== undefined;
}

const RightItemItem: React.FC<Props> = ({ type, data }) => {
  const isPayment = !isTransaction(data);

  return (
    <div className={classNames(styles["right-item-item"], styles[type])}>
      <div className={styles.date}>{data.date}</div>
      <div className={styles["other-info"]}>
        <div className={styles.name}>{data.name}</div>
        {isPayment && (
          <div className={styles.description}>{data.description}</div>
        )}
        <div className={styles.amount}>{`${data.amount} TL`}</div>
      </div>
      {isTransaction(data) && (
        <ArrowDropDown
          fontSize="large"
          className={
            data.growth === "up"
              ? styles["arrow-growth"]
              : styles["arrow-recession"]
          }
        />
      )}
    </div>
  );
};

export default RightItemItem;
