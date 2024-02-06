import { useEffect, useState } from 'react';


export const App = () => {
  const [data, setData] = useState(null) //state

  const fetchDataMethod = async () => {
    const fetchedData = await fetch("https://jsonplaceholder.typicode.com/todos") // data loading

    const fetchedDataJson = await fetchedData.json() //transforming to json

    setData(fetchedDataJson) // setting data for state
  }

  useEffect(() => { // calling method when page rendered
    fetchDataMethod()
  }, [])
  
  console.log("data", data)

  return (
    <div>
      a
    </div>
  );
}

export default App;
