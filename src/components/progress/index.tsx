import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  name: "TL" | "EURO" | "USD";
  value: number;
}

const Progress: React.FC<Props> = ({ name, value }) => {
  const percent = value * 100;

  return (
    <div className={styles.progress}>
      <div className={styles.row}>
        <span className={styles[`${name}-name`]}>{name}</span>
        <div className={styles.bar}>
          <div
            style={{ width: `${percent}%` }}
            className={classNames(styles["value-bar"], styles[`${name}-bar`])}
          />
          <span className={styles.value}>{`${percent}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
