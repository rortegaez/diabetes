import { ALIMENTOS } from "./alimentos/alimentos";
import { useState } from "react";

const Prueba = () => {
  const [element, setElement] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const handleBusqueda = (event) => {
    setElement(event.target.value.toLowerCase());
  };
  const deleteResultSearch = () => {
    setResultSearch([]);
  };

  const handleSearch = () => {
    let search = [];
    if (element.length === 0) {
      return null;
    } else {
      ALIMENTOS.map((item) => {
        if (item.Alimento.toLowerCase().includes(element)) {
          search.push(item);
        } else {
          null;
        }
      });
      setResultSearch(search);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <textarea
        name="buscador"
        id="buscador"
        value={element.trim()}
        onChange={handleBusqueda}
        className="box-border bg-slate-100 w-1/2 h-12 rounded-lg p-2 border-solid border-2 border-green-300 focus:bg-slate-200 max-md:w-full max-lg:w-2/3"
      ></textarea>
      <section className="flex flex-row gap-5">
        <button
          className="bg-green-500 p-2 mt-3 mb-3 rounded-lg border-solid border-4 border-green-700 active:bg-green-600 w-96 max-lg:w-2/4"
          onClick={handleSearch}
        >
          Alimento
        </button>
        <button
          className="bg-green-500 p-2 mt-3 mb-3 rounded-lg border-solid border-4 border-green-700 active:bg-green-600 w-96 max-lg:w-2/4"
          onClick={deleteResultSearch}
        >
          Borrar
        </button>
      </section>
      {resultSearch.length > 0 ? (
        <table className="w-2/3">
          <thead>
            <tr className="bg-green-300 p-3">
              <th className="mx-4">Alimento</th>
              <th className="mx-4">1 Ración de HC en gramos</th>
              <th className="mx-4">IG</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((item) => (
              <tr>
                <td className="mx-4">{item.Alimento}</td>
                <td className="mx-4 flex flex-col justify-center items-center">
                  {item.RacionGramos}
                </td>
                <td className={`${item.color} px-4`}>{item.IG}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
export default Prueba;
