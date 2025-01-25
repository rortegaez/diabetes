import { useRatio } from "../hooks/RatioContext";
import { ButtonClick } from "./ButtonClick";

import style from "../css/ratio.module.css";

export const Ratio = () => {
  const { updateRatio, ratio, handleInputChange, inputValue } = useRatio();

  return (
    <div className={style.container}>
      <h1>Ratio</h1>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        className={style.inputRatio}
      />
      <p>Ratio actual: {`${ratio}`} insulina por ración</p>
      <ButtonClick onClick={updateRatio} type="button" name={"Update"} />
    </div>
  );
};
