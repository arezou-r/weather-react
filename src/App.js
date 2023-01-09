import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Weather cityName="tehran" />
      </header>
    </div>
  );
}

export default App;
