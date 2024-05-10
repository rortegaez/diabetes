
const CalcTotal = () => {
  const print = () => {
    console.log('esto es una función, funcionando')
  }

  return(
    <>
    <h1>Esto es la calculadora libre</h1>
    <button onClick={() => print()} className="bg-red-300">Funcionada?</button>
    <a href="http://www.as.com" target="_blank" rel="noopener noreferrer"><button>as</button></a>
    </>
  )
}

export default CalcTotal;
