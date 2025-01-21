import PropTypes from "prop-types";

import "../css/buttonClick.module.css";

export const ButtonClick = ({ type, name, onClick }) => {
  return (
    <>
      <button type={type} onClick={onClick} className="but">
        {name}
      </button>
    </>
  );
};

ButtonClick.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
