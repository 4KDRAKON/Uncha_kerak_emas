import React from 'react';
import './App.scss';
import { Header } from './Components/Header/header';
import { Section } from './Components/Section/section';
import { Section2 } from './Components/section2/section2';
import { Scetion3 } from './section3/section3';
import { Section4 } from './Components/section4/section4';
import { Section5 } from './Components/section5/.section4';
import { Section6 } from './Components/section6/section6';
import { Footer } from './Components/footer/footer';

function App() {

  // const [userName, setName] = React.useState("Salom")
  // const [age, setAge] = React.useState(0)
  // const [disbale, setDisable] = React.useState(false)

  // React.useEffect(() => {
  //   if (userName.length > 2 && age > 17) {
  //     setDisable(false)
  //   } else {
  //     setDisable(true)
  //   }
  // }, [userName, age])

  return (
    <>
      {/* <div className="container">
        <form >
          <input type="text" placeholder='Text' onChange={(evt) => setName(evt.target.value)} />
          <input type="text" placeholder='Number' onChange={(evt) => setAge(evt.target.value)} />

          <button disabled={disbale}>Bos</button>
        </form>
      </div> */}

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}





      
<Header />
<Section />
< Section2 />
< Scetion3 />
<Section4 />
<Section5 />
<Section6 />
<Footer />



    </>
  );
}

export default App;
