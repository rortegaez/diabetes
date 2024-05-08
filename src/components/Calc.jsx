import { useState } from "react";

const Calc = ({ cantidadHC }) => {
  const [number, setNumber] = useState();
  const [result, setResult] = useState(0);

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const operator = () => {
    let resultOperator = number / cantidadHC;
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
          className="w-12 h-6 mx-2 flex flex-col items-center"
        ></textarea>
        <button
          onClick={operator}
          className="box-border px-2 bg-green-400 border-4 border-green-700 rounded-xl active:border-green-950"
        >
          Uds
        </button>
        <div className="bg-green-200 w-9 flex flex-col items-center px-6">
          {result}
        </div>
      </div>
    </>
  );
};

export default Calc;
