import PropTypes from "prop-types";

import style from "../css/cardLittleFood.module.css";

export const CardLittleFood = ({ moreFood }) => {
  console.log("render CardLittleFood");
  console.log(moreFood, "moreFood little");
  return (
    <div className={style.card}>
      <div className={style.title}>
        <p>Tipo</p>
        <p>Medida</p>
        <p>Insulina</p>
      </div>
      {moreFood.map((element, index) => (
        <div key={index} className={style.container}>
          <p>{element.nombre}</p>
          <p>
            {element.cantidadGramos
              ? element.cantidadGramos
              : element.cantidadCC}
          </p>
          <p>{element.RacionHC}</p>
        </div>
      ))}
    </div>
  );
};

CardLittleFood.propTypes = {
  moreFood: PropTypes.array,
};
