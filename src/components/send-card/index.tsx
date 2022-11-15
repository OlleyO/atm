import { Avatar, TextField } from "@mui/material";
import styled from "@mui/system/styled";
import { SendTo } from "../../core/types";
import styles from "./styles.module.scss";

interface Props {
  sendTo: SendTo;
}

const TextFieldCustom = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "var(--placeholder-color)",
  },

  "&:hover .MuiInput-underline:hover:after": {
    borderBottomColor: "#fff",
  },

  "& input": {
    color: "#fff",
    textAlign: "right",
  },
});

const SendCard: React.FC<Props> = ({ sendTo }) => (
  <div className={styles["send-card"]}>
    <Avatar className={styles.avatar} />
    <div className={styles.text}>
      <div>{sendTo.name}</div>
      <div>{sendTo.surname}</div>
    </div>

    <TextFieldCustom
      className={styles.input}
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      placeholder="00,00 TL"
      variant="standard"
    />

    <button className={styles.button}>Send</button>
  </div>
);

export default SendCard;
