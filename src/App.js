
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import quoteData from './components/quotedata';

function App() {
  return (
    <div className='quotes'>
      <Header/>
      <Body quoteData={quoteData}/>
      <Footer/>
    </div>
  );
}

export default App;
