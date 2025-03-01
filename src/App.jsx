import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import { Destructuring } from './Destructuring'
import { Spread } from './Spread'
import { EventHandler } from './EventHandler'
import { CollectionComponentsss } from './CollectionComponentsss'
import EventHandlerAsProps from './EventHandlerAsProps'
import EventPropagation from './EventPropagation'
import UseState from './UseState'
import ResetState from './ResetState'

function App() {
  let [showSecond, setShowSecond] = useState(false);
  const handleShow = (e) => {
    setShowSecond(e.target.checked)
  }

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

        <UseState />


        {/* Hal perlu di perhatikan soal state,  */}
        {/* 
          React menyimpan state berdasarkan posisi dan jenis component.
          jika kita mempunyai 2 jenis component yang sama dengan posisi yang sama
          sebagai contoh:
          A: Menggunakan Component ResetState dan posisi setelah Div id reset-state dan props name="Reset First"
          B: Menggunakan Component ResetState dan posisi setelah Div id reset-state dan props name="Reset Second"
          
          Nah jika kita mempunyai kondisi component seperti di atas, perlu di perhatikan 
          "sekilas hal itu mungkin 2 component yang berbeda karena mempunyai berbeda karena mempunyai props yang berbeda,
          sehingga state masing-masing component tidak akan saling terpengaruhi"

          namun hal tersebut salah, perlu di ingat react menyimpan state berdasarkan posisi dan jenis component, maka
          state pada component A akan tersimpan di component B.

          sebagai contoh:
          di parent component kita ada variable showSecond dengan data type boolean dan kita set nilai defaultnya adalah false
          let showSecond = false

          Kita akan menghilangkan component A jika nilai showSecond adalah true, dan akan menghilangkan component B jika nilai showSecond adalah false
          {showSecond ? <ResetState name='Reset Second' /> : <ResetState name='Reset First' />}
          <input type="checkbox" name="show" checked={showSecond} onChange={handleShow}/> Show Second ResetState Component
          
          *Note: didalam ResetState component merupakan fitur increment number
          
          Kemudian di website, coba lihat component yang keluar pertama kali adalah component A
          karena nilai showSecond adalah false, 
          sekarang coba klik button increment untuk menaikan state number di component A, kemudian
          sekarang kita klik checkbox showSecond untuk menghilangkan component A dan memunculkan component B.

          Harusnya Nilai state akan reset ke 0 karena Component A dan B itu berbeda, namun aslinya nilai state tidak kereset
          hal ini sesuai dengan yang di bilang tadi bahwa react menyimpan state berdasarkan posisi dan jenis component
          jadi walaupun propsnya berbeda tapi jika posisi dan jenis componentnya sama maka statenya tidak akan ke reset.
          
          Sehingga hal ini harus di perhatikan baik-baik.
        */}
        <div id="reset-state">
          {showSecond ? <ResetState name='Reset Second' /> : <ResetState name='Reset First' />}
          <input type="checkbox" name="show" checked={showSecond} onChange={handleShow}/> Show Second ResetState Component
        </div>
        {/* 
          Solusinya apa ? 

          
          Solusi 1: Mengubah posisi versi 1
          sebelumnya posisinya sama yaitu div#reset-state -> ResetState
          nah kita bisa ubah posisinya dengan berikut:
          {showSecond ? 
            ( 
              <section>
                <ResetState name='Reset Second' /> 
              </section>
            )
          : (
            <div id="tambahan-div">
              <ResetState name='Reset First' />}
            </div>
          )

          sekarang posisinya berbeda yaitu:
          div#reset-state -> section -> ResetState
          div#reset-state -> div#tambahan-div -> ResetState

          Solusi 2: Mengubah posisi versi 2
          {!showSecond && <ResetState name='Reset First' />}
          {showSecond && <ResetState name='Reset Second' />}
          Hal ini mungkin terlihat sama tapi kalau di gambar menggunakan component tree ini sebenarnya berbeda:
                        div#reset-state
                              |
                              |
                ---------------------------------
                |                               |
                |                               |                        
      ResetState(name=Reset First)  ResetState(name=Reset Second)
          jadi sebenarnya kalau seperti ini di react posisi componentnya itu berbeda, 
          hanya saja yang di munculin itu tergantung kepada kondisionalnya

          Solusi 3: menggunakan key
          {showSecond ? <ResetState key="reset-2" name='Reset Second' /> : <ResetState key="reset-1" name='Reset First' />}
        */}
        </div>
    </>
  )
}

export default App
