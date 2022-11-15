import { Slider } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import styled from "@mui/system/styled";

import classNames from "classnames";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface Props {
  label: string;
  value: number;
  hanldeChange(event: Event, newValue: number | number[]): void;
  type: "amount" | "term";
  min?: number;
  max?: number;
  step?: number;
}

interface DropdownProps {
  currentValue: string;
  options: string[];
  open: boolean;
  handleChange(index: number): void;
  handleToggle(): void;
}

const StyledSlider = styled(Slider)({
  "& .MuiSlider-thumb": {
    backgroundColor: "#fff",
  },

  "& .MuiSlider-rail": {
    backgroundColor: "#19232c",
  },

  "& .MuiSlider-track": {
    backgroundColor: "#b6d4ef",
  },
});

const Dropdown: React.FC<DropdownProps> = ({
  currentValue,
  options,
  open,
  handleChange,
  handleToggle,
}) => {
  return (
    <div className={styles["dropdown-wrapper"]}>
      <div onClick={() => handleToggle()} className={styles["dropdown-label"]}>
        <span>{currentValue}</span>
        <KeyboardArrowDownOutlinedIcon
          className={open ? styles["open"] : styles["close"]}
        />
      </div>
      {open && (
        <div className={styles["dropdown-options"]}>
          {options.map(
            (option, index) =>
              option !== currentValue && (
                <div
                  key={index}
                  className={styles["dropdown-option"]}
                  onClick={() => {
                    handleChange(index);
                    handleToggle();
                  }}
                >
                  {option}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

const CalculatorSliderInput: React.FC<Props> = ({
  label,
  value,
  hanldeChange,
  type,
  min,
  max,
  step,
}) => {
  const items = ["Month(s)", "Year(s)"];
  const [activeItem, setActiveItem] = useState<string>(items[0]);

  const [open, setOpen] = useState<boolean>(false);

  const handleDropdownChange = (index: number) => setActiveItem(items[index]);
  const handleDropdownToggle = () => setOpen(!open);

  const isValueInitial = value === 0;

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["head"]}>
        <span className={styles["label"]}>{label}</span>

        <div className={styles["value-container"]}>
          <div
            className={classNames(styles["value"], {
              [styles.term]: type === "term",
            })}
          >
            <span>{value}</span>

            {type === "amount" && (
              <>
                {" "}
                <span
                  className={isValueInitial ? styles["not-set"] : styles["set"]}
                >
                  TL
                </span>
              </>
            )}
          </div>
          {type === "term" && (
            <Dropdown
              options={items}
              currentValue={activeItem}
              handleChange={handleDropdownChange}
              handleToggle={handleDropdownToggle}
              open={open}
            />
          )}
        </div>
      </div>

      <StyledSlider min={min} max={max} onChange={hanldeChange} step={step} />
    </div>
  );
};

export default CalculatorSliderInput;
