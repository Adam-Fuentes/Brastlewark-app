import React from 'react';

import './App.css';

import Heading from "./components/Heading/Heading";
import Deck from "./components/Deck/Deck";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="Body">
      <Heading />
      <Deck />
      <Footer />
    </div>
  );
}

export default App;
