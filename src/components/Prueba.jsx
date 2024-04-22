import { ALIMENTOS, COLOR } from "./alimentos/alimentos";
import { useState } from "react";

const Prueba = () => {
  const [element, setElement] = useState("");
  const [resultSearch, setResultSearch] = [];

  const handleBusqueda = (event) => {
    setElement(event.target.value.toLowerCase());
  };
  console.log(element, "element");

  const handleSearch = () => {
    if (element.length === 0) {
      return <p>Ingrese el alimento</p>;
    } else {
      const search = ALIMENTOS.filter((item) => {
        item.Alimento.toLowerCase().includes(element);
      });
      setResultSearch(search);
    }
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
    </>
  );
};
export default Prueba;
