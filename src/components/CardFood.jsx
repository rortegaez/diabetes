import { ALIMENTOS, COLOR } from "./alimentos/alimentos";
import { useState } from "react";

const Prueba = () => {
  const [element, setElement] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const handleBusqueda = (event) => {
    setElement(event.target.value.toLowerCase());
  };
  // console.log(element, "element");

  const handleSearch = () => {
    let search = [];
    if (element.length === 0) {
      return null;
    } else {
      ALIMENTOS.map((item) => {
        // console.log(element, "element");
        // console.log(item.Alimento, "alimento");
        if (item.Alimento.toLowerCase().includes(element)) {
          search.push(item);
        } else {
          null;
        }
      });
      setResultSearch(search);
      // console.log(search, "search");
    }
  };
  console.log(resultSearch, "resultS");

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <textarea
        name="buscador"
        id="buscador"
        value={element.trim()}
        onChange={handleBusqueda}
        className="box-border bg-slate-100 w-1/2 h-12 rounded-lg p-2 border-solid border-2 border-green-300 focus:bg-slate-200"
      ></textarea>
      <button
        className="bg-green-500 p-2 mt-3 mb-3 rounded-lg border-solid border-4 border-green-700 active:bg-green-600"
        onClick={handleSearch}
      >
        Alimento
      </button>
      {resultSearch.length > 0 ? <h1>Solución</h1> : null}
      {resultSearch.length > 0 ? (
        <ul className="flex flex-col justify-center items-center">
          {resultSearch.map((item) => (
            <div className="flex flex-row justify-center items-center gap-3">
              <li>{item.Alimento}</li>
              <li>{item.RacionGramos}</li>
              <li className={`${item.color} p-1`}>{item.IG}</li>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Prueba;
