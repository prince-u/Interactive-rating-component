import "./App.css";
import Home from "./Home";
import ThankYouPage from "./Thank you page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Thank you page" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
