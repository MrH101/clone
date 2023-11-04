import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Hro from './components/Hro/Hro';
import Principles from './components/Principles/Principles'
import Services from './components/Services/Services'
import principle from './utils/principle'
import services from './utils/services'
import Footer from './components/Footer/Footer'
import Ticker from './components/Widget/Ticker';
import Symbol from './components/Widget/Symbol';
import Symbols from './components/Widget/Symbols';
import Symb from './components/Widget/Symb';
import Symbl from './components/Widget/Symbl';
import Slider from './components/Slider/Slider';
import { SliderData } from './utils/sliderData';

function App() {
  
  const cards = principle.map(item =>{
    return(
      <Principles 
       image = {item.image}
       description = {item.description}
      />
      )
  })

  const cardo = services.map(item => {
    return(
      <Services
      image = {item.image}
      name = {item.name}
      />
      )
  })

  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Ticker/>
    <Hro/>
    <div className="sym">
    <table className = "sym-table">
    <tr>
    <td><Symbol symbol="USDJPY"/></td>
    <td><Symbl/></td>
    <td><Symbols/></td>
    <td><Symb/></td>
    </tr>
    </table>
    </div>
    <Slider slides={SliderData} />
    <section>
    <h3 className ="p-image-h">OUR MAIN OBJECTIVES</h3>
    <p className="p-image-txt">
    We want to provide our clients with a financial investment 
    portfolio with<br/>
    specialized technology, adjusted to 
    their different demands in time and scenario
    </p>
    <div className="p-image-container">
    {cards}
    </div>
    </section>
    <Ticker/>
    <div className="s-contaner">
    <h1 className='cardo-header'>OUR SERVICES</h1>
    <section className= 'cardo'>
    {cardo}
    </section>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
