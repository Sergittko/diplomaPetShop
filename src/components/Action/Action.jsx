import { useState } from "react";
import style from "./Action.module.scss";
import cross from "../../img/icons/plus.svg";
import promogif from "../../img/promo.gif";
import promogif30 from "../../img/promo30.gif";

let Action = () => {
  let [promo, setPromo] = useState(false);
  let [promo2, setPromo2] = useState(false);
  useState(() => {
    setTimeout(() => {
      setPromo(true);
    }, 1000);
    setTimeout(() => {
      setPromo2(true);
    }, 5000);
  }, []);
  return (
    <div className={style.actionContier}>
      {promo ? (
        <div className={style.promo2}>
          <img className={style.promoGif} src={promogif} alt="Промо" />
          <img
            className={style.promoCross}
            onClick={() => setPromo(false)}
            src={cross}
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      {promo2 ? (
        <div className={style.promo}>
          <img className={style.promoGif} src={promogif30} alt="Промо" />
          <img
            className={style.promoCross}
            onClick={() => setPromo2(false)}
            src={cross}
            alt=""
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Action;
