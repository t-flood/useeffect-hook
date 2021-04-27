import React, {useEffect, useState} from 'react'
import axios from "axios"

const TestComponent = () => {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [breweries, setBreweries] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(`https://api.openbrewerydb.org/breweries?by_name=${search}`)
      // setPost(results.data)
      setBreweries(results.data)
      console.log(results)
    };
    fetchData()
  },[search]);



  console.log("component rendered");
  return (
    <div>
      <h1>TestComponent</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(state => state+1)}>Increment</button>
      <button onClick={() => setDarkMode(state => !state)}>Toggle DarkMode</button>
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />

      {breweries.map((brewery) => {
        return <h2>{brewery.name}</h2>;
    })}
  </div>
  )
}

export default TestComponent
