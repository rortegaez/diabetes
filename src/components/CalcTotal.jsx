import { useState } from "react";

const CalcTotal = () => {
  const [gr, setGr] = useState();
  const [grHc, setGrHc] = useState();
  const [grTotal, setGrTotal] = useState();
  const [result, setResult] = useState();

  const handleGramos = (event) => {
    setGr(event.target.value);
  };
  const handleGramosHc = (event) => {
    setGrHc(event.target.value);
  };
  const handleGramosTotal = (event) => {
    setGrTotal(event.target.value);
  };
  const handleOperation = () => {
    console.log("boton presionado");
    const first = (grTotal * grHc) / gr;
    const second = first / 10;
    return setResult(second);
  };

  return (
    <section>
      <textarea name="gramos" id="gramos" value={gr} onChange={handleGramos} />
      <textarea
        name="gramosHC"
        id="gramosHC"
        value={grHc}
        onChange={handleGramosHc}
      />
      <textarea
        name="gramosTotal"
        id="gramosTotal"
        value={grTotal}
        onChange={handleGramosTotal}
      />
      <button onClick={handleOperation} className="bg-red-200 m-3 px-2">
        Calcular
      </button>
      <textarea name="result" id="result">
        {result}
      </textarea>
    </section>
  );
};

export default CalcTotal;
