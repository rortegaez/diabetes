import { ALIMENTOS, COLOR } from "./alimentos/alimentos";

console.log(ALIMENTOS, "alimentos");
export default function Prueba() {
  const type = [];
  const name = [];
  ALIMENTOS.map((item) => {
    name.push(item.Alimento);
    if (type.includes(item.tipo)) {
      return null;
    } else {
      type.push(item.tipo);
    }
  });
  const prueba1 = () => {
    console.log("funciona");
  };
  console.log(type, "lacteos");
  console.log(name, "alimentos");
  return (
    <>
      <button className="haber" onClick={() => prueba1()}>
        Funcionará
      </button>
    </>
  );
}
