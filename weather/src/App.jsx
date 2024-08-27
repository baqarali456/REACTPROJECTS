import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter } from './store/Slice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.user.count)
  const [weather, setWeather] = useState([])

  useEffect(() => {
    ; (async (params) => {
      try {
        let response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=G2', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '7773722499msh404627f43301981p10a33djsn3b076d3a7747',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
          }
        })
        let data = await response.json();
        console.log("data", data)
        if (response.status === 400) setWeather([])
        else setWeather(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementCounter())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
