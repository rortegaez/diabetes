import { useState } from "react";
import { useRatio } from "./useRatio";

export function useCalculator ({moreFood}) {
	const [result, setResult] = useState(0);
	const [inputValue, setInputValue] = useState("");
  const { myRatio } = useRatio();

	const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calcular = (event) => {
    event.preventDefault();
    const number = parseFloat(inputValue);
    console.log(number, "number");
    if (!isNaN(number)) {
      const resultInside = (number * myRatio.current) / moreFood;
      console.log(resultInside, "resultInside");
      return setResult(resultInside);
    }
  };

  const updateRatio = (ratio) => {
    myRatio.current = ratio;
  }

	return ({result, inputValue, handleInputChange, calcular, updateRatio})
}
