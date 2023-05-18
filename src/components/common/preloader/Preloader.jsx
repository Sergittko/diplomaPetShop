import preloader1 from "../../../img/preloader/preloader1.gif";
import preloader2 from "../../../img/catDog.gif";
import style from "./Preloader.module.scss";

let Preloader = () => {
  return (
    <div className={style.preloaderContainer}>
      <img src={preloader2} alt="preloader" />
      <div className={style.textContainer}>
        {/* <h1>КІТПЕС</h1> */}
        <h1>Loading</h1>
        <div className={style.dot1}></div>
        <div className={style.dot2}></div>
        <div className={style.dot3}></div>
      </div>
    </div>
  );
};

export default Preloader;
