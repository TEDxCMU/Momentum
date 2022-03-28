import cn from "classnames";
import styles from "components/page.module.css";

function Page({ children }) {
  return (
    <div>
      <div className={cn(styles.centerAlignment, styles.header)}>Schedule</div>
      <div className={styles.centerAlignment}>{children}</div>
    </div>
  );
}

export default Page;
