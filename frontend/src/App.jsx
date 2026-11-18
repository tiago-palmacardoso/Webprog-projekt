import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Contest from './components/Contest';
import ZurichMap from './components/ZurichMap';
import Charts from './components/Charts';


export default function App() {
  return (
    <div className='app'>
      <Header />
      <Home />


      <div className='sections'>
        <Contest />
        <ZurichMap />
        <Charts />

      </div >
      <Footer />
    </div>
  );
}