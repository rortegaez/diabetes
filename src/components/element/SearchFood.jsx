import { ButtonClick } from "../component/ButtonClick";
import { useFood } from "../hooks/useFood";

import { CardFood } from "../component/CardFood";
import style from "../css/searchFood.module.css";

export const SearchFood = () => {
  console.log("rendering SearchFood");
  const { getFood, searchFood, setSearchFood, food, moreFood, handleDelete } =
    useFood();

  const handleSubmit = (event) => {
    event.preventDefault();
    getFood();
  };

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearchFood(newQuery);
  };

  return (
    <>
      <form className={style.form}>
        <input
          name="search"
          onChange={handleSearch}
          value={searchFood?.value}
          placeholder="Pizza, arroz, patatas..."
        />
      </form>
      <div className={style.buttoms}>
        <ButtonClick type="submit" name={"Buscar"} onClick={handleSubmit} />
        <ButtonClick type="button" name={"Delete"} onClick={handleDelete} />
      </div>
      <div>
        {food && food.length > 0 && (
          <CardFood food={food} moreFood={moreFood} />
        )}
      </div>
    </>
  );
};
