import { ALIMENTOS, COLOR } from "./alimentos/alimentos";
import { useState } from "react";

const Prueba = () => {
  const [element, setElement] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  const handleBusqueda = (event) => {
    setElement(event.target.value.toLowerCase());
  };
  console.log(element, "element");

  const handleSearch = () => {
    let search = []
    if (element.length === 0) {
      return null
    } else {
      ALIMENTOS.map((item) => {
        console.log(element, 'element')
        console.log(item.Alimento, 'alimento')
        if(item.Alimento.toLowerCase().includes(element)){
          search.push(item)
        } else {
          null
        }
      })
      setResultSearch(search);
      console.log(search, 'search')
    }
  };
  console.log(resultSearch, 'resultS')

  return (
    <>
      <textarea
        name="buscador"
        id="buscador"
        value={element.trim()}
        onChange={handleBusqueda}
        className="bg-slate-500 w-200 h-100"
      ></textarea>
      <button className="rounded" onClick={handleSearch}>
        Funcionará
      </button>
      {resultSearch.length > 0 ? <h1>Solución</h1> : null}
      {resultSearch.length > 0 ? 
      <ul>
        {resultSearch.map((item) => (
          <div>
            <li>{item.Alimento}</li>
            <li>{item.RacionGramos}</li>
          </div>
        ))}
      </ul> : null}
    </>
  );
};
export default Prueba;
