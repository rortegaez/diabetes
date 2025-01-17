import { useFood } from "../hooks/useFood";

export const SearchFood = () => {
  const { getFood, searchFood, setSearchFood } = useFood();

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
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          onChange={handleSearch}
          value={searchFood?.value}
          placeholder="Pizza, arroz, patatas..."
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
