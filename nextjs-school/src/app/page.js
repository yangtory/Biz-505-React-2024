import styles from "./page.module.css";
import StdMain from "@/comps/StdMain";

export default () => {
  return (
    <main className={styles.main}>
      <h1>청춘대학 소프트웨어 공학과</h1>
      <div className={styles.section}>
        <StdMain />
      </div>
    </main>
  );
};
