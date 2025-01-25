import { useRatio } from "../hooks/RatioContext";
import { ButtonClick } from "./ButtonClick";

export const Ratio = () => {
  const { updateRatio, ratio, handleInputChange, inputValue } = useRatio();

  return (
    <div>
      <h1>Ratio</h1>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <p>{ratio}</p>
      <ButtonClick onClick={updateRatio} type="button" name={"Update"} />
    </div>
  );
};
