const ClickButton = ({color, name, click}) => {
    const colorVariants = {
        green: 'bg-green-400 border-green-700 active:border-green-950',
        red: 'bg-red-400 border-red-700 active:border-red-950',
        yellow: 'bg-yellow-400 border-yellow-700 active:border-yellow-950'
    }

    return(<>
    <button onClick={click} className={`box-border px-2 ${colorVariants[color]} border-4 rounded-xl px-3 py-2 my-3 `}>{name}</button>
    </>)
}

export default ClickButton