const ClickButton = ({color, name, click}) => {

    return(<>
    <button onClick={click} className={`box-border px-2 bg-${color}-400 border-4 border-${color}-700 rounded-xl px-3 py-2 my-3 active:border-${color}-950`}>{name}</button>
    </>)
}

export default ClickButton