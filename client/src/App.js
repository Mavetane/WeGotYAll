import './App.css';
import { showRoutes } from './routes/index'
function App () {
  return (
    <div className="App">
      {showRoutes()}
    </div>
  );
}

export default App;
