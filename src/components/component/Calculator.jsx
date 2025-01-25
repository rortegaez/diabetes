import PropTypes from "prop-types";
import { useCalculator } from "../hooks/useCalculator";
import { ButtonClick } from "./ButtonClick";

import style from "../css/calculator.module.css";

export const Calculator = ({ moreFood }) => {
  console.log("render Calculator");
  const { result, inputValue, handleInputChange, calcular } = useCalculator({
    moreFood,
  });

  return (
    <div className={style.calculator}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={style.inputCalc}
      />
      <ButtonClick name="Calcular" type="button" onClick={calcular} />
      <p className={style.result}>{result}</p>
    </div>
  );
};

Calculator.propTypes = {
  moreFood: PropTypes.array,
};
