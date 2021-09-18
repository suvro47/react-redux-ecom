import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <section className="sticky top-0">
        <Navbar />
      </section>
      <Home />
    </div>
  );
}

export default App;
