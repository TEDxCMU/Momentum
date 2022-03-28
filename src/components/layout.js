import cn from "classnames";
import styles from "components/Layout.module.css";

function Layout({ children, title = "" }) {
  return (
    <div>
      <div className={cn(styles.centerAlignment, styles.header)}>{title}</div>
      <div className={styles.centerAlignment}>{children}</div>
    </div>
  );
}

export default Layout;
