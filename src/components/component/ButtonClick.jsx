import PropTypes from "prop-types";

export const ButtonClick = ({ type, name, onClick, props }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {name}
        {props?.map((itemFood) => (
          <div key={itemFood.nombre}>
            <p>{itemFood.nombre}</p>
            <p>{itemFood.cantidadGramos}</p>
            <p>{itemFood.RacionHC}</p>
          </div>
        ))}
      </button>
    </>
  );
};

ButtonClick.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.array,
};
