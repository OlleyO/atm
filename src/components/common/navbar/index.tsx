import styles from "./styles.module.scss";

import SearchIcon from "@mui/icons-material/Search";
import Logo from "../logo";
import NavigationList from "../navigation-list";
import ProfileDropdown from "../../profile-dropdown";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <div className={styles["search-input-container"]}>
      <SearchIcon />
      <input
        className={styles["search-input"]}
        type="text"
        placeholder="Search payment, transfer, transcation..."
      />
    </div>

    <div className={styles["part-right"]}>
      <NavigationList />

      <ProfileDropdown username="Nastya" />
    </div>
  </nav>
);

export default Navbar;
