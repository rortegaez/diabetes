import PropTypes from "prop-types";

export const ButtonClick = ({ type, name, onClick }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

ButtonClick.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
