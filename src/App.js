import BackgroundContent from "./MyComponents/Main";
import './App.css';
function App() {
   
  const myArray = [
    { id: '1', type:'Celsius'},
    { id: '2', type:'Fahrenheit'},
    { id: '3', type:'Kelvin'}
  ]

  return (
    <div className="App">
      <BackgroundContent myArray={myArray} />
    </div>
   
  );
}

export default App;
