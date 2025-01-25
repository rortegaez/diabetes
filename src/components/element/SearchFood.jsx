import { useEffect, useState } from "react";

import { ButtonClick } from "../component/ButtonClick";
import { useFood } from "../hooks/useFood";

import { CardFood } from "../component/CardFood";

import style from "../css/searchFood.module.css";

export const SearchFood = () => {
  console.log("rendering SearchFood");
  const { getFood, searchFood, setSearchFood, food, moreFood, handleDelete } =
    useFood();
  const [show, setShow] = useState(false);

  console.log(food, "food");

  const handleSubmit = (event) => {
    event.preventDefault();
    getFood();
  };

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearchFood(newQuery);
  };

  useEffect(() => {
    if (food.length === 0) {
      setShow(!show);
    }
  }, [food]);

  return (
    <div className={style.container}>
      <form className={style.form}>
        <input
          name="search"
          onChange={handleSearch}
          value={searchFood?.value}
          placeholder="Pizza, arroz, patatas..."
          className={style.input}
        />
      </form>
      <div className={style.buttoms}>
        <ButtonClick
          type="submit"
          name={"Buscar"}
          onClick={handleSubmit}
          className={style.but}
        />
        <ButtonClick
          type="button"
          name={"Delete"}
          onClick={handleDelete}
          className={style.but}
        />
      </div>
      {food && food.length > 0 && (
        <div className={style.card}>
          <CardFood
            food={food}
            moreFood={moreFood}
            className={`${style.card} ${show ? "" : style.hidden}`}
          />
        </div>
      )}
    </div>
  );
};
