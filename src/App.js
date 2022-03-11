import "./App.css";
import Student from "./components/Student";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/layouts/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Student />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/*<NotFound />*/}
    </Router>
  );
}

export default App;
