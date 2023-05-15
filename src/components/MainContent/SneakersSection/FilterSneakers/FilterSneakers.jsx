import style from "./FilterSneakers.module.scss";
import { useTranslation } from "react-i18next";
import ModelFilter from "./Filters/ModelFilter/ModelFilter";
import SizeFilter from "./Filters/SizeFilter/SizeFilter";
import BrandFilter from "./Filters/BrandFilter/BrandFilter";
import PriceFilter from "./Filters/PriceFilter/PriceFilter";
import YearFilter from "./Filters/YearFilter/YearFilter";
import { ReactComponent as ChevroneUp } from "../../../../img/icons/circleChevronUp.svg";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

let FilterSneakers = ({ setFilterData, goods }) => {
  const { t } = useTranslation();
  let [showAllFilters, setShowAllFilters] = useState(false);
  let [clearFilters, setClearFilters] = useState(false);

  useEffect(() => {
    setClearFilters(false);
  }, [clearFilters]);

  return (
    <aside className={style.filterWrapper}>
      <div>
        <div className={style.filterHeader}>
          <h3
            className={style.filterTitle}
            onClick={() =>
              window.innerWidth < 760 && setShowAllFilters(!showAllFilters)
            }
          >
            {t("sneakersSection.filterSneakers.filterTitle")}
          </h3>
          <button onClick={() => setClearFilters(true)}>Очистити пошук</button>
        </div>
        <div
          className={
            window.innerWidth < 760
              ? showAllFilters === true
                ? style.showAllFilters
                : style.hideAllFilters
              : ""
          }
        >
          <ModelFilter
            setFilterData={setFilterData}
            clearFilters={clearFilters}
            goods={goods}
          />
          <BrandFilter
            setFilterData={setFilterData}
            clearFilters={clearFilters}
            goods={goods}
          />
          {/* <SizeFilter
            setFilterData={setFilterData}
            clearFilters={clearFilters}
            goods={goods}
          /> */}
          <PriceFilter
            setFilterData={setFilterData}
            clearFilters={clearFilters}
            goods={goods}
          />
          {/* <YearFilter
            setFilterData={setFilterData}
            clearFilters={clearFilters}
            goods={goods}
          /> */}
        </div>
      </div>
      {window.innerWidth > 760 && (
        <div className={style.buttonUp}>
          <ScrollLink
            to="sneakerResultContainer"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <ChevroneUp className={style.chevroneUp} />
          </ScrollLink>
        </div>
      )}
    </aside>
  );
};

export default FilterSneakers;
