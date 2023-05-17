import { useState } from "react";
import style from "./Action.module.scss";
import cross from "../../img/icons/plus.svg";
import promogif from "../../img/promo.gif";
import promogif30 from "../../img/promo30.gif";
import PetPropose from "./../PetPropose/PetPropose";

let Action = () => {
  let [promo, setPromo] = useState(false);
  let [promo2, setPromo2] = useState(false);
  let [prop, setProp] = useState(false);
  prop
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  useState(() => {
    setTimeout(() => {
      setPromo(true);
    }, 5000);
    setTimeout(() => {
      setPromo2(true);
    }, 10000);
    setTimeout(() => {
      setProp(true);
    }, 2000);
  }, []);
  return (
    <>
      {prop && <PetPropose setProp={setProp} />}
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
    </>
  );
};

export default Action;
