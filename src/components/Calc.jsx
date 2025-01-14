import { useState } from "react";
import ClickButton from "../components/element/ClickButton";

const Calc = ({ cantidadHC }) => {
  const [number, setNumber] = useState();
  const [result, setResult] = useState(0);

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const operator = () => {
    let resultOperator = (number * 0.5) / cantidadHC;
    console.log(resultOperator, "operato");
    return setResult(resultOperator.toFixed(2));
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <textarea
          name="cantidadFood"
          id="cantidadFood"
          value={number}
          onChange={handleNumber}
          placeholder="HC consumidos"
          className="w-22 h-6 mx-2 flex flex-col items-center"
        ></textarea>
        <ClickButton name={"Uds"} color={"green"} click={operator} />
        <div className="bg-green-200 w-9 flex flex-col items-center px-6">
          {result}
        </div>
      </div>
    </>
  );
};

export default Calc;
