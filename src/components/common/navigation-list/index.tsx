import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const NavigationList: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { pathname } = router;

  const links = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Transfers",
      href: "/transfers",
    },
    {
      title: "Payments",
      href: "/payments",
    },
    {
      title: "Recent Transactions",
      href: "/recent-transactions",
    },
    {
      title: "Loan",
      href: "/loan",
    },
    {
      title: "Online Support",
      href: "/online-support",
    },
  ];

  return (
    <ul className={classNames(styles["link-list"], className)}>
      {links.map(({ title, href }) => (
        <li
          className={classNames(styles.link, {
            [styles.active]: pathname === href,
          })}
          key={href}
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
