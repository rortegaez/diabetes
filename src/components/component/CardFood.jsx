import PropTypes from "prop-types";

import { ButtonClick } from "./ButtonClick";

export const CardFood = ({ food, moreFood }) => {
  console.log(food, "food");

  return (
    <>
      {food.map((element, index) => (
        <div key={index}>
          <p>{element.Alimento}</p>
          <p>{element.RacionGramos}</p>
          <p>{element.id}</p>
          {moreFood.includes(element) && (
            <ButtonClick
              name={"Ver más"}
              type="button"
              element={element.ejemplo}
            />
          )}
          {/* <div>
            <CardLittleFood moreFood={moreFood} className={style.card} />
          </div> */}
        </div>
      ))}
    </>
  );
};

CardFood.propTypes = {
  food: PropTypes.array.isRequired,
  moreFood: PropTypes.array,
};
