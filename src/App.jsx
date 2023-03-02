import "./App.scss";
import Rating from "./components/Rating";

/* 
Conditionally render components Rating and Message
based on a variable in a state

The button in Rating should change that variable from false to true
making Rating derender and Message render

In Message there should be a button to reverse this process

App should remember the rating 
*/

function App() {
  return (
    <div className="App">
      <Rating />
    </div>
  );
}

export default App;
