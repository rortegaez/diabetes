import PropTypes from "prop-types";
import { useRatio } from "../hooks/RatioContext";
import { useCalculator } from "../hooks/useCalculator";
import { ButtonClick } from "./ButtonClick";

import style from "../css/calculator.module.css";

export const Calculator = ({ moreFood }) => {
  console.log("render Calculator");
  const { result, inputValue, handleInputChange, calcular } = useCalculator({
    moreFood,
  });
  const { ratio } = useRatio();

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
      <p>Ratio actual: {`${ratio}`} insulina por ración</p>
    </div>
  );
};

Calculator.propTypes = {
  moreFood: PropTypes.array,
};
