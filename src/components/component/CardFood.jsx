import PropTypes from "prop-types";

import { ButtonClick } from "./ButtonClick";
import { CardLittleFood } from "./CardLittleFood";

import style from "../css/cardFood.module.css";

export const CardFood = ({ food, moreFood }) => {
  return (
    <>
      {food.map((element, index) => (
        <div key={index}>
          <p>{element.Alimento}</p>
          {moreFood.includes(element) && (
            <ButtonClick
              name={"Ver más"}
              type="button"
              element={element.ejemplo}
            />
          )}
          <div>
            <CardLittleFood moreFood={moreFood} className={style.card} />
          </div>
          <p>{element.RacionGramos}</p>
          <p>{element.id}</p>
        </div>
      ))}
    </>
  );
};

CardFood.propTypes = {
  food: PropTypes.array.isRequired,
  moreFood: PropTypes.array,
};
