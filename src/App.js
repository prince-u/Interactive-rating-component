import "./App.css";
import Home from "./Home";
import ThankYouPage from "./Thank you page";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [Rating, setRating] = useState(null);
  function handleChoice(choice) {
    if (choice === null) {
      alert("hi");
    } else {
      setRating(choice);
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home handleChoice={handleChoice} />} />
        <Route
          path="/Thank you page"
          element={<ThankYouPage rating={Rating} />}
        />
      </Routes>
    </div>
  );
}

export default App;
