import { useState } from "react";
import { useRatio } from "../hooks/RatioContext.jsx";

export function useCalculator ({moreFood}) {
	const [result, setResult] = useState(0);
	const [inputValue, setInputValue] = useState("");
  const { ratio } = useRatio();

	const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calcular = (event) => {
    console.log(ratio, 'Ratio calc')
    event.preventDefault();
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      const resultInside = (number * ratio) / moreFood;
      console.log(resultInside, "resultInside");
      return setResult(resultInside);
    }
  };

	return ({result, inputValue, handleInputChange, calcular})
}
