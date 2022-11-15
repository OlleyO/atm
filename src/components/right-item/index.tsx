import classNames from "classnames";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Transaction, Payment } from "../../core/types";
import RightItemItem from "./right-item-item";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  data: Transaction[] | Payment[];
  type: "transaction" | "payment";
}

const RightItem: React.FC<Props> = ({ className, data, type }) => {
  const splitData = (data: Transaction[] | Payment[]) => {
    const dataCopy = [...data];
    const dataLength = dataCopy.length;
    const dataSplit = [];

    for (let i = 0; i < dataLength; i += 3) {
      dataSplit.push(dataCopy.splice(0, 3));
    }

    return dataSplit;
  };

  return (
    <div className={classNames(styles["right-item"], className, styles[type])}>
      <h3 className={styles.title}>
        {type === "payment" ? "Recurring Payments" : "Recent Transactions"}
      </h3>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={true}
      >
        {splitData(data).map((data, index) => (
          <SwiperSlide className={styles.slider} key={index}>
            {data.map((item, index) => (
              <RightItemItem key={index} type={type} data={item} />
            ))}
          </SwiperSlide>
        ))}

        <button className={styles.button}>View All</button>
      </Swiper>
    </div>
  );
};

export default RightItem;
