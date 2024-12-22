import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Home />} /> */}

          {/** Reroute all paths not list to login page. */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
