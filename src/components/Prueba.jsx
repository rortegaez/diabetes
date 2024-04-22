import { ALIMENTOS, COLOR } from "./alimentos/alimentos";
import { useState } from "react";

const Prueba = () => {
  const [element, setElement] = useState("");

  const type = [];
  const namer = [];

  ALIMENTOS.map((item) => {
    namer.push({ ident: item.id, food: item.Alimento.toLowerCase() });
    if (type.includes(item.tipo)) {
      return null;
    } else {
      type.push(item.tipo);
    }
  });

  console.log(type, "tipos");
  console.log(namer, "alimentos");

  const handleBusqueda = (event) => {
    setElement(event.target.value.toLowerCase());
  };
  const handleSearch = () => {
    if (element.length === 0) {
      return null;
    }
    const resultSearch = namer.filter((item) => {
      return item.food.includes(element)
    })
    console.log(resultSearch, 'search')
    ALIMENTOS.map((item) => {
      const resultTotal = item.id.includes(resultSearch.ident)
      console.log(resultTotal, 'total')
    })
  };

  return (
    <>
      <textarea
        name="buscador"
        id="buscador"
        value={element}
        onChange={handleBusqueda}
        className="bg-slate-500 w-200 h-100"
      ></textarea>
      <button className="rounded" onClick={handleSearch}>
        Funcionará
      </button> 
      <h1></h1>
    </>
  );
};
export default Prueba;
