import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import { Destructuring } from './Destructuring'
import { Spread } from './Spread'
import { EventHandler } from './EventHandler'
import { CollectionComponentsss } from './CollectionComponentsss'
import EventHandlerAsProps from './EventHandlerAsProps'
import EventPropagation from './EventPropagation'

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
          <CollectionComponentsss />
        </div>
        
        <HelloWorld text="Virgo"/>
        <Destructuring text="Virgo Stevanus"/>
        
        {/* Jika ingin mengirim semua props ke component, dari pada melakukan seperti ini: */}
        {/* <Spread hobby={testSpread.hobby} food={testSpread.food} drink={testSpread.drink} /> */}

        {/* Lebih Baik menggunakan spread syntax seperti berikut: */}
        {/* ...testSpread merupakan gaya spread syntax dari JS yang dapat mengirim semua attribute langsung ke component */}
        <Spread {...testSpread}/>

        <EventHandler />

        {/* event handler di kirim melalui props */}
        <EventHandlerAsProps handleClick={() => console.log("clicked from props")}/>

        <EventPropagation />

        </div>
    </>
  )
}

export default App
