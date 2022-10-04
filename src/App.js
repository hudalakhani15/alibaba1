import './App.css';
import Navbar from "./Components/Navbar"
import Subnavbar from './Components/Subnavbar';
import SliderBox from "./Components/Sliderbox/SliderBox";
// import Card from "./Components/CArd/Card"
import CardRender from "./Components/CardsRender"
import LiveStreamCard from "./Components/CArd/LiveStreamCard";
import BottomCardMain from "./Components/CArd/BottomCardMain";
import Footer from "./Components/Footer";
import FromRender from "./Components/Form/FromRender";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Subnavbar />
       <SliderBox />
       <CardRender />
       <LiveStreamCard />
     <BottomCardMain />
     <FromRender/>
       <Footer />
    </div>
  );
}

export default App;