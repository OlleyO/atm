import classNames from "classnames";
import styles from "./styles.module.scss";

const Button: React.FC<React.ComponentPropsWithoutRef<"button">> = (props) => (
  <button {...props} className={classNames(styles.button, props.className)} />
);

export default Button;
