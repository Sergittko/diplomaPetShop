import style from "./PriceFilter.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import classNames from "classnames";

let PriceFilter = ({ setFilterData, clearFilters }) => {
  let [filterMode, changeFilterMode] = useState(false);
  let [errorMessage, showError] = useState(false);
  let [inputFrom, changeInputFrom] = useState(10);
  let [inputTo, changeInputTo] = useState(60000);
  const { t } = useTranslation();

  useEffect(() => {
    clearFilters && changeInputFrom(10);
    clearFilters && changeInputTo(60000);
    applyPrice();
  }, [clearFilters]);

  let applyPrice = () => {
    if (inputFrom > inputTo) {
      return showError(t("sneakersSection.filterErrors.priceBiggerLower"));
    }
    if (inputFrom > 60000 || inputTo > 60000) {
      return showError(t("sneakersSection.filterErrors.priceBigger"));
    }
    if (inputFrom < 10 || inputTo < 10) {
      return showError(t("sneakersSection.filterErrors.priceLower"));
    }

    showError(false);
    setFilterData((filters) => {
      return { ...filters, price: { from: +inputFrom, to: +inputTo } };
    });
  };

  return (
    <div className={style.filterContainer}>
      <div
        className={style.filterTitle}
        onClick={() => {
          changeFilterMode(!filterMode);
        }}
      >
        {t("sneakersSection.filterSneakers.price")}
      </div>

      <div
        className={classNames(
          style.filterContent,
          filterMode ? style.showFilter : null
        )}
      >
        {errorMessage && (
          <div className={style.filterError}>
            <span>{errorMessage}</span>
          </div>
        )}

        <label>{t("sneakersSection.from")}</label>
        <input
          className={style.yearInput}
          min="10"
          max="60000"
          type="number"
          value={inputFrom}
          onChange={(e) => changeInputFrom(e.target.value)}
        />
        <label>{t("sneakersSection.to")}</label>
        <input
          className={style.yearInput}
          value={inputTo}
          min="10"
          max="60000"
          onChange={(e) => changeInputTo(e.target.value)}
          type="number"
        />
        <button className={style.applyButton} onClick={() => applyPrice()}>
          {t("sneakersSection.apply")}
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
