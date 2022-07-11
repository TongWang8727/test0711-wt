
import './App.css';
import ComputerPage from './scenes/ComputerPage';
import MobbilePage from './scenes/MobbilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ComputerPage />} />
          <Route path="/ComputerPage" element={<MobbilePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
