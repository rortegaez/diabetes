import { ALIMENTOS } from "./alimentos/alimentos";
import { useState } from "react";
import Calc from "./Calc";
import LittleCard from "./LittleCard";
import CardLittleFood from "./CardLitteFood";

const CardFood = () => {
  const [element, setElement] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [found, setFound] = useState(false);
  const [type, setType] = useState("gr");

  const endWithS = () => {
    let updateElement = element.trim();
    if (updateElement.endsWith("s")) {
      updateElement = element.slice(0, -1);
    }
    return updateElement;
  };

  const handleBusqueda = (event) => {
    setElement(event.target.value.toLowerCase());
  };

  const handleSearch = (searchValue) => {
    let search = [];
    if (searchValue.length === 0) {
      return null;
    } else {
      ALIMENTOS.forEach((item) => {
        if (item.Alimento.toLowerCase().includes(searchValue)) {
          search.push(item);
        }
      });
      if (search.length > 0) {
        search.forEach((item) => {
          item.ejemplo?.forEach((subitem) => {
            if ("cantidadGramos" in subitem) {
              setType("gr");
            }
            if ("cantidadCC" in subitem) {
              setType("cc");
            }
          });
        });
      }
      setResultSearch(search);
      if (search.length === 0) {
        return setFound(true);
      } else {
        return null;
      }
    }
  };

  const deleteResultSearch = () => {
    setFound(false);
    setResultSearch([]);
  };

  const handleClickButton = () => {
    const updateElement = endWithS();
    setElement(updateElement);
    handleSearch(updateElement);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <section className="flex flex-col justify-center items-center">
        {found ? <LittleCard deleteResultSearch={deleteResultSearch} /> : null}
      </section>
      <textarea
        name="buscador"
        id="buscador"
        value={element.trim()}
        onChange={handleBusqueda}
        className="box-border bg-slate-100 w-1/2 h-12 rounded-lg p-2 border-solid border-2 border-green-300 focus:bg-slate-200 max-md:w-full max-lg:w-2/3"
      ></textarea>
      <section className="flex flex-row gap-5 w-full 2xl:justify-center 2xl:items-center">
        <button
          className="bg-green-500 p-2 mt-3 mb-3 rounded-lg border-solid border-4 border-green-700 active:bg-green-600 w-1/2 xl:w-96"
          onClick={handleClickButton}
        >
          Buscar
        </button>
        <button
          className="bg-green-500 p-2 mt-3 mb-3 rounded-lg border-solid border-4 border-green-700 active:bg-green-600 w-1/2 xl:w-96"
          onClick={deleteResultSearch}
        >
          Borrar
        </button>
      </section>
      {resultSearch.length > 0 ? (
        <table className="w-full xl:w-2/3">
          <thead>
            <tr className="bg-green-300 p-3">
              <th className="mx-4">Alimento</th>
              <th></th>
              <th className="mx-4">
                {type === "cc"
                  ? "Ración de HC en cc"
                  : "1 Ración de HC en gramos"}
              </th>
              <th className="mx-4">IG</th>
              <th>Calculator</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((item, index) => (
              <tr key={index}>
                <td className="mx-4 border-b-2 border-black-300">
                  {item.Alimento}
                </td>
                <td>
                  {item.ejemplo?.length > 0 ? (
                    <CardLittleFood props={item.ejemplo} />
                  ) : null}
                </td>
                <td className="mx-4 flex flex-col justify-center items-center">
                  {item.RacionGramos}
                </td>
                <td className={`${item.color} px-4`}>
                  {item.RacionGramos === 0 ? "No evaluable" : item.IG}
                </td>
                <td>
                  <Calc cantidadHC={item.RacionGramos} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default CardFood;
