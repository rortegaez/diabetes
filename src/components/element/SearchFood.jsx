import { useState } from "react";
import { ButtonClick } from "../component/ButtonClick";
import { useFood } from "../hooks/useFood";

import style from "../css/searchFood.module.css";

export const SearchFood = () => {
  const { getFood, searchFood, setSearchFood } = useFood();
  const [view, setView] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    getFood();
    setView(!view);
  };

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearchFood(newQuery);
  };

  function handleDelete() {
    console.log("print");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          name="search"
          onChange={handleSearch}
          value={searchFood?.value}
          placeholder="Pizza, arroz, patatas..."
        />
        <div className={style.buttoms}>
          <ButtonClick type="submit" name={"Buscar"} />
          <ButtonClick type="button" name={"Delete"} onClick={handleDelete} />
        </div>
      </form>
    </>
  );
};
