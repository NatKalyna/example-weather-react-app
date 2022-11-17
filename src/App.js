import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Poltava" />
        <div className="footer">
          <a
            href="https://github.com/NatKalyna/example-weather-react-app"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Natalia Kalenska 💙💛
        </div>
      </div>
    </div>
  );
}

export default App;
