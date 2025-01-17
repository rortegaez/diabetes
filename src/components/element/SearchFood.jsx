import { useEffect, useState } from "react";
import { FOOD } from "../food/FOOD.js";

export const SearchFood = () => {
  const [searchFood, setSearchFood] = useState("");
  const [error, setError] = useState(null);

  const getFood = ({ searchFood }) => {
    console.log(searchFood, "searchoooo");
    if (searchFood === " ") return null;

    const searchChange = searchFood
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    FOOD.forEach((item) => {
      const alimentoChange = item.Alimento.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (alimentoChange.includes(searchChange)) {
        console.log(item, "item");
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchFood, "submit");
    getFood({ searchFood });
  };

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearchFood(newQuery);
  };

  useEffect(() => {
    if (searchFood === "") {
      setError("No se puede hacer una busqueda vacia");
      return;
    }
    if (searchFood.match(/^\d+$/)) {
      setError("No se puede realizar una buscqueda por número");
      return;
    }
  }, [SearchFood]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          onChange={handleSearch}
          value={searchFood}
          placeholder="Pizza, arroz, patatas..."
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
