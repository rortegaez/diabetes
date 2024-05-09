import { useState } from "react";

const CalcTotal = () => {
  const [gr, setGr] = useState(0);
  const [grHc, setGrHc] = useState(0);
  const [grTotal, setGrTotal] = useState(0);

  const handleGramos = (event) => {
    setGr(event.target.value);
  };
  const handleGramosHc = (event) => {
    setGrHc(event.target.value);
  };
  const hanldeGramosTotal = (event) => {
    setGrTotal(event.target.value);
  };
  return;
  <>
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
    </section>
  </>;
};

export default CalcTotal;
