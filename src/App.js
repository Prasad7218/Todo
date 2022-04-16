// import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
        <Routes>
      <Route path="/home" element={<Todo />}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
