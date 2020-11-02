import './App.css';
import { showRoutes } from './routes/index'
function App () {
  return (
    <div className="App">
      <header className="App-header">
        WE GOT Y'ALL
      </header>
      {showRoutes()}
    </div>
  );
}

export default App;
