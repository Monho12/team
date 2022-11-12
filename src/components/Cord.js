import styles from "../styles/Cord.module.css";

export const Cord = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} className={styles.img} />
      <div className={styles.text}>{props.text}</div>
      <div className={styles.tCont}>
        <div className={styles.text2}>{props.text}</div>
      </div>
      <div className={styles.footer}>
        <img src={props.owner.picture} className={styles.img1} />
        <div className={styles.name}>{props.owner.firstName} {props.owner.lastName}</div>
        <div className={styles.vl}></div>
        <h5 className={styles.date}>{props.publishDate}</h5>
      </div>
    </div>
  );
};
