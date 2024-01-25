import { Brand, Cta, Navbar } from './components/index';
import {Blog, Header, Footer, Possibility, Features, Whatgpt3} from "./containers";
import './App.css';

function App() {

  return (
    <div className="App">
      
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <Whatgpt3/>
      <Features />
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
