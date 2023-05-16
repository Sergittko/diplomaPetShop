import style from "../../FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import classNames from "classnames";

let ModelFilter = ({ setFilterData, clearFilters, goods }) => {
  let newGoods = {};
  let models = {};
  goods.forEach((item) => {
    newGoods[item.model] = false;
    models[item.model] = `${item.model}`;
  });
  const { t } = useTranslation();
  let [filterMode, changeFilterMode] = useState(false);
  let [filter, changeFilter] = useState(newGoods);

  useEffect(() => {
    changeFilter((prev) => ({
      ...prev,
    }));
  }, [goods]);

  useEffect(() => {
    clearFilters && changeFilter(newGoods);
  }, [clearFilters]);

  useEffect(() => {
    let checkFilter = [];
    Object.keys(filter).forEach(
      (item) => !!filter[item] && checkFilter.push(models[item])
    );
    setFilterData((filters) => {
      return { ...filters, model: checkFilter };
    });
  }, [filter]);

  return (
    <div className={style.filterContainer}>
      <div
        className={style.filterTitle}
        onClick={() => {
          changeFilterMode(!filterMode);
        }}
      >
        {t("sneakersSection.filterSneakers.model")}
      </div>

      <div
        className={classNames(
          style.filterContent,
          filterMode ? style.showFilter : null
        )}
      >
        <ul>
          {Object.keys(models).map((item) => {
            return (
              <li key={item}>
                <input
                  id={models[item]}
                  type="checkbox"
                  name={models[item]}
                  checked={filter[item]}
                  onChange={() => {
                    changeFilter((prev) => ({
                      ...prev,
                      [item]: !filter[item],
                    }));
                  }}
                />
                <label htmlFor={models[item]}>{models[item]}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ModelFilter;
