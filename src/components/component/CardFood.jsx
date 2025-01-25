import PropTypes from "prop-types";
import { useState } from "react";

import { ButtonClick } from "./ButtonClick";
import { Calculator } from "./Calculator";
import { CardLittleFood } from "./CardLittleFood";

import style from "../css/cardFood.module.css";

export const CardFood = ({ food, moreFood }) => {
  console.log("render CardFood");
  const [showMoreId, setShowMoreId] = useState(null);
  const [showCalc, setShowCalc] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (item) => {
    setShowMoreId(item);
    setShowCalc(null);
    setActiveComponent("CardLittleFood");
  };

  const handleCalc = (item) => {
    setShowCalc(item);
    setShowMoreId(null);
    setActiveComponent("Calculator");
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
                <div className={style.buttons}>
                  <ButtonClick
                    name={"Ver más"}
                    type="button"
                    onClick={() => handleClick(element.id)}
                  />
                  <ButtonClick
                    name="Calc"
                    type="button"
                    onClick={() => handleCalc(element.id)}
                  />
                </div>
              )}
            </p>
            <p>{element.RacionGramos}</p>
            <p className={style[element.color]}>{element.IG}</p>
            {(showMoreId === element.id || showCalc === element.id) && (
              <>
                <div
                  className={style.overlay}
                  onClick={() => {
                    setShowMoreId(null);
                    setShowCalc(null);
                    setActiveComponent(null);
                  }}
                />
                <div className={`${style.card} ${style.show}`}>
                  {activeComponent === "CardLittleFood" && (
                    <>
                      {console.log(element.ejemplo, "element.ejemplo")}
                      <CardLittleFood moreFood={element.ejemplo} />
                    </>
                  )}
                  {activeComponent === "Calculator" && (
                    <Calculator moreFood={element.RacionGramos} />
                  )}
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
