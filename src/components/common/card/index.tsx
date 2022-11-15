import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  className?: string;
  bodyClassName?: string;
  renderTabs?: () => JSX.Element;
  renderTabItems?: () => JSX.Element;
  renderBody?: () => JSX.Element;
}

const Card: React.FC<Props> = ({
  className,
  bodyClassName,
  renderTabs,
  title,
  renderBody,
  renderTabItems,
}) => {
  return (
    <div className={classNames(styles["card-wrapper"], className)}>
      <div className={styles.head}>
        <h3>{title}</h3>
        {renderTabs && renderTabs()}
      </div>
      <div className={classNames(styles.body, bodyClassName)}>
        {renderTabItems && renderTabItems()}
        {renderBody && renderBody()}
      </div>
    </div>
  );
};

export default Card;
