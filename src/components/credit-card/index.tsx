import { useState } from "react";
import styles from "./styles.module.scss";

import { CreditCard as CreditCardData } from "../../core/types/index";
import classNames from "classnames";

interface Props {
  active: boolean;
  data: CreditCardData;
}

type side = "front" | "back";

const CreditCard: React.FC<Props> = ({ active, data }) => {
  const [side, setSide] = useState<side>("front");

  const handleFlip = () => setSide(side === "front" ? "back" : "front");

  return (
    <div
      className={classNames(styles["credit-card"], {
        [styles["credit-card--not-active"]]: !active,
      })}
      onClick={() => active && handleFlip()}
    >
      <div
        className={styles["card-inner"]}
        style={{
          transform: `rotateY(${side === "front" ? 0 : 180}deg)`,
        }}
      >
        <div className={styles.front}>
          <div className={styles["number"]}>{data.number}</div>
          <div className={styles.bottom}>
            <div className={styles.owner}>{data.owner}</div>
            <div className={styles.expiration}>
              {`${data.expirationMonth}/${data.expirationYear}`}
            </div>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.line} />
          <div className={styles.CV}>{data.CV}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
