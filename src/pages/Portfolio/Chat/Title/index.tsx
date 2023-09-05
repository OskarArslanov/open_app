import styles from "./Title.module.scss";


const Title = () => {
  return (
    <div className={styles.Container}>
      <h1>Bot Chat</h1>
      <span>Ai-based service</span>
    </div>
  );
};

export default Title;