import { CardLittleFood } from "./CardLittleFood";

import PropTypes from "prop-types";

export const CardFood = ({ food }) => {
  console.log(food, "food");
  return (
    <>
      {food.map((element) => (
        <div key={element.name}>
          <p>{element.Alimento}</p>
          <div>
            {/* se debe de poner un boton "ver mas" y cuando se haga click entonces sale la tarjeta CardLittleFood */}
            {element.ejemplo?.length > 0 ? (
              <CardLittleFood props={element.ejemplo} />
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
