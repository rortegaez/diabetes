import PropTypes from "prop-types";
import { useState } from "react";

import { ButtonClick } from "./ButtonClick";

export const CardFood = ({ food }) => {
  const [view, setView] = useState(false);
  console.log(food, "food");

  const see = (event) => {
    event.preventDefault();
    console.log("ver");
    setView(!view);
  };

  return (
    <>
      {food.map((element) => (
        <div key={element.name}>
          <p>{element.Alimento}</p>
          <div>
            {element.ejemplo?.length > 0 ? (
              <ButtonClick name={"Ver más"} type="button" onClick={see} />
            ) : null}
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
};
