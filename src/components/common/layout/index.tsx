import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

import styles from "./styles.module.scss";

interface Props {}

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => (
  <div className={styles.layout}>
    <Head>
      <title>Course paper</title>
    </Head>
    <Navbar />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
