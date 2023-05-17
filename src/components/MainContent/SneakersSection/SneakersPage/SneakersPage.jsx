import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import style from "./SneakersPage.module.scss";
import { useState } from "react";
import Delivery from "./DeliverySection/Delivery";
import Recommended from "./RecommendedSection/Recommended";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

let SneakersPage = ({ addToCart, staffPics }) => {
  const { t } = useTranslation();
  let { state } = useLocation();
  let [selectedSize, setSize] = useState(null);
  let [isItemAdded, setItemAdded] = useState(false);
  let addToCartHandler = (state, size) => {
    let data = { ...state, size, total: 1, price: Math.ceil(+state?.price) };
    addToCart(data);
  };
  let sizesArray = state.size.map(String);
  return (
    <div className={style.pageContainer}>
      <div className={style.sneakerContainer}>
        <div className={style.sneakerImage}>
          <img src={state.image} srcSet={state.srcSet} alt={state.name} />
        </div>
        <div className={style.sneakerInfo}>
          <h2>{state.brand}</h2>
          <h1>{state.name}</h1>
          <div className={style.price}>
            <span>
              {state.price} {t("uah")}
            </span>
          </div>
          <span className={style.size}>{t("variant")}:</span>

          <div
            className={style.sizePicker}
            onChange={(e) => {
              setSize(e.target.value);
            }}
            onClick={() => {
              setItemAdded(false);
            }}
          >
            {sizesArray.map((size) => {
              let isDisabled = false;
              return (
                <label
                  key={size}
                  className={classNames(
                    selectedSize === size ? style.checked : null,
                    isDisabled ? style.disabled : null
                  )}
                >
                  <input
                    type="radio"
                    required={true}
                    value={size}
                    name="sizePicker"
                    disabled={isDisabled}
                  />
                  <span>{size}</span>
                </label>
              );
            })}
          </div>

          <div className={style.buttonContainer}>
            {isItemAdded ? (
              <NavLink to="/cart">
                <button className={style.goToCartButton}>
                  {t("sneakerPage.goToCart")}
                </button>
              </NavLink>
            ) : (
              <button
                className={style.buyButton}
                onClick={() => {
                  (selectedSize &&
                    (addToCartHandler(state, +selectedSize) ||
                      setItemAdded(true))) ||
                    setSize(null);
                }}
              >
                {t("sneakerPage.buy")} {state.price} {t("uah")}
              </button>
            )}
            {isItemAdded && (
              <span
                className={style.addedToCartSpan}
                onClick={() => {
                  setItemAdded(false);
                }}
              >
                {t("sneakerPage.addedToCart")}
              </span>
            )}
          </div>

          <Delivery />
        </div>
      </div>
      {staffPics && <Recommended staffPics={staffPics} />}
    </div>
  );
};

export default SneakersPage;
