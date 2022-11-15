import style from "../styles/Cord.module.css";

export const SmallFoot = (props) => {
  return (
    <div className={style.footer}>
      <img src={props.owner.picture} className={style.img1} />
      <div className={style.name}>
        {props.owner.firstName} {props.owner.lastName}
      </div>
      <div className={style.vl}></div>
      <h5 className={style.date}>{props.publishDate}</h5>
    </div>
  );
};
