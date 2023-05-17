import { useState } from "react";
import style from "./PetPropose.module.scss";
import cross from "../../img/icons/plus.svg";
import { useTranslation } from "react-i18next";

let PetPropose = ({ setProp }) => {
  const { t } = useTranslation();
  let [inpText, setInpText] = useState("");
  return (
    <>
      <div className={style.back}></div>
      <div className={style.proposeContainer}>
        <h1>{t("prL")}</h1>
        <p className={style.p1}>{t("pp1")}</p>
        <p className={style.p2}>{t("pp2")}</p>
        <p className={style.p3}>{t("pp3")}</p>
        <img src={cross} alt="close" onClick={() => setProp(false)} />
        <input
          type="text"
          value={inpText}
          placeholder={t("inputPlh")}
          onChange={(e) => setInpText(e.target.value)}
        />
        <button onClick={() => inpText.length !== 0 && setProp(false)}>
          {t("ppBTN")}
        </button>
      </div>
    </>
  );
};

export default PetPropose;
