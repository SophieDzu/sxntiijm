import logo from './logo.svg';
import './App.css';
import './style/style.css';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Review from './page/Review';
import RoomDetails from './page/RoomDetails';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Carousel />

        <Review />

        <RoomDetails />
    </div>
  );
}

export default App;
