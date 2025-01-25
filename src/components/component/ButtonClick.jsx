import PropTypes from "prop-types";

import styles from "../css/buttonClick.module.css";

export const ButtonClick = ({ type, name, onClick }) => {
  return (
    <>
      <button type={type} onClick={onClick} className={styles.button}>
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
