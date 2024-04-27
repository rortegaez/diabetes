import { useState } from "react";

const Calc = ({ cantidadHC }) => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const operator = () => {
    return setResult(result / cantidadHC);
  };
  console.log(number, "number");

  return (
    <>
      <h1>{cantidadHC}</h1>
      <textarea
        name="cantidadFood"
        id="cantidadFood"
        value={element.trim()}
        onChange={handleNumber}
        className="w-6 h-6"
      ></textarea>
      <button onClick={operator}></button>
    </>
  );
};

export default Calc;
