import PropTypes from "prop-types";
import { useState } from "react";

import { ButtonClick } from "./ButtonClick";
import { CardLittleFood } from "./CardLittleFood";

import style from "../css/cardFood.module.css";

export const CardFood = ({ food, moreFood }) => {
  console.log("render CardFood");
  const [showMoreId, setShowMoreId] = useState(null);

  const handleClick = (item) => {
    setShowMoreId(item);
  };

  return (
    <div className={style.pantalla}>
      <div className={style.mainContainer}>
        <div className={style.title}>
          <p>Alimento</p>
          <p></p>
          <p>Ración de HC en gramos</p>
          <p>IG</p>
        </div>
        {food.map((element, index) => (
          <div key={index} className={style.container}>
            <p>{element.Alimento}</p>
            <p>
              {moreFood.includes(element) && (
                <ButtonClick
                  name={"Ver más"}
                  type="button"
                  onClick={() => handleClick(element.id)}
                />
              )}
            </p>
            <p>{element.RacionGramos}</p>
            <p className={style[element.color]}>{element.IG}</p>
            {showMoreId === element.id && (
              <>
                <div
                  className={style.overlay}
                  onClick={() => setShowMoreId(null)}
                />
                <div className={`${style.card} ${style.show}`}>
                  <CardLittleFood moreFood={element.ejemplo} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

CardFood.propTypes = {
  food: PropTypes.array.isRequired,
  moreFood: PropTypes.array,
};
