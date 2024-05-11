import ClickButton from '../components/element/ClickButton'

const LittleCard = ({ deleteResultSearch }) => {
  return (
    <div class="absolute z-20 w-48 h-24 bg-yellow-300 flex flex-col items-center justify-center border-4 border-yellow-700 rounded-2xl">
      <h1>No encontrado</h1>
      <ClickButton name={'Cerrar'} color={'green'} click={deleteResultSearch} />
    </div>
  );
};

export default LittleCard;
