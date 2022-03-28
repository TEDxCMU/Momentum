import cn from "classnames";
import styles from "components/page.module.css";

function Page({ children, title = "" }) {
  return (
    <div>
      <div className={cn(styles.centerAlignment, styles.header)}>{title}</div>
      <div className={styles.centerAlignment}>{children}</div>
    </div>
  );
}

export default Page;
