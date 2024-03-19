import { useEffect, useState } from "react"


function App() {

  const [count, setCount] = useState()

  useEffect(()=>{
    console.log(`El valor del contenedor es ${count}`);
  },[count])
 
  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
    <p>Contador: {count}</p>
    <button onClick={increment}>Incremetar count</button>
    </>
  )
}

export default App
