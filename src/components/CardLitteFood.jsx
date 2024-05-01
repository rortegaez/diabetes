import { useState } from "react";

const CardLittleFood = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        {!isOpen && (
          <button
            onClick={toggleCard}
            className="box-border px-4 py-1 bg-green-400 border-4 border-green-700 rounded-xl active:border-green-950"
          >
            Ver más
          </button>
        )}
        {isOpen && (
          <div className="absolute z-20 w-auto h-auto bg-yellow-300 flex flex-col items-center justify-center border-4 border-yellow-700 rounded-2xl px-8 py-4">
            <table className="box-border flex flex-col justify-center">
              <thead className="bg-yellow-500 px-6 rounded-lg">
                <tr className="grid grid-cols-3 gap-8">
                  <td>Tipo</td>
                  <td>{props.cantidadGramos ? "Gramos" : "CC"}</td>
                  <td>Insulina</td>
                </tr>
              </thead>
              <tbody>
                {props.map((item, index) => (
                  <tr key={index} className="grid grid-cols-3 gap-10">
                    <td>{item.nombre}</td>
                    <td>
                      {item.cantidadGramos
                        ? item.cantidadGramos
                        : item.cantidadCC}
                    </td>
                    <td>{item.RacionHC}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={toggleCard}
              className="box-border px-4 py-1 mt-2 bg-yellow-500 border-4 border-yellow-700 rounded-xl active:border-yellow-950"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CardLittleFood;
