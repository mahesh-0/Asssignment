import "./App.css";
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import List from "./components/List";
import Details from "./components/Details/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={List}/>
          <Route exact path="/details" Component={Details}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
