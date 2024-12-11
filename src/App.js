import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Review from './page/Review';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Carousel />

        <Review />
    </div>
  );
}

export default App;
