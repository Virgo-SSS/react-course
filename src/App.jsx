import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import { Destructuring } from './Destructuring'
import { Spread } from './Spread'
import CollectionComponent from './CollectionComponent'

function App() {
  const [count, setCount] = useState(0)
  const testSpread = {
    hobby: "scroll fesnuk",
    food: "ayam",
    drink: "air putih"
  }

  return (
    <>
      <div>
        <div>
          <CollectionComponent />
        </div>
        
        <HelloWorld text="Virgo"/>
        <Destructuring text="Virgo Stevanus"/>
        
        {/* Dari pada melakukan seperti ini: */}
        {/* <Spread hobby={testSpread.hobby} food={testSpread.food} drink={testSpread.drink} /> */}

        {/* Lebih Baik menggunakan spread syntax seperti berikut: */}
        {/* ...testSpread merupakan gaya spread syntax dari JS yang dapat mengirim semua attribute langsung ke component */}
        <Spread {...testSpread}/>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
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
