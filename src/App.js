import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>HOLA</h1>
      <BrowserRouter>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
