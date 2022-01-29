import Countdown from "react-countdown";

import background from "./background.jpg";

import "./App.css";

const Completionist = () => <span>You are good to go!</span>;

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        Полинка! Твой present от лиц - Денис, Валерия, Андрей, Михаил будет ждать тебя тогда, когда закончится этот замечательный таймер, написанный мной! 
      </h1>
      <Countdown date={1643713200000} className="count">
        <Completionist />
      </Countdown>
    </div>
  );
}

export default App;