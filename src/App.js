import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css'
import {Header, Footer, Banner} from './components';
import { footerHeight } from './constants/constants';

function App() {
  return (
    <div className='App'>
      <div style={{minHeight: window.innerHeight - footerHeight}}>
        <Header/>
        <Banner/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
