import PropTypes from "prop-types";

export const CardLittleFood = ({ moreFood }) => {
  return (
    <>
      <h3>CardLittleFood</h3>
      {moreFood.map((element, index) => (
        <div key={index}>
          <p>{element.Alimento}</p>
          <p>{element.RacionGramos}</p>
          <p>{element.id}</p>
        </div>
      ))}
      <button></button>
    </>
  );
};

CardLittleFood.propTypes = {
  moreFood: PropTypes.array,
};
