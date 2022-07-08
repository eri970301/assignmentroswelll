import Tasks from './components/Tasks';
import Time from './components/Time';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {

  return (
    <div className="App">
      <Time />
      <h6 className="container my-5">Previous Tasks</h6>
      <Tasks />
    </div>
  );
}

export default App;
