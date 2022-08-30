
import './App.css';
import Info from './components/info';
import Footer from './components/footer';
import Interests from './components/interests';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
