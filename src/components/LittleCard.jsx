const LittleCard = ({ deleteResultSearch }) => {
  return (
    <div class="absolute z-20 w-48 h-24 bg-yellow-300 flex flex-col items-center justify-center border-4 border-yellow-700 rounded-2xl">
      <h1>No encontrado</h1>
      <button
        class="mt-5 px-10  rounded-lg bg-green-400 border-2 border-green-700 active:border-gray-500 active:bg-green-600"
        onClick={deleteResultSearch}
      >
        Cerrar
      </button>
    </div>
  );
};

export default LittleCard;
