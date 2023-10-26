import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [clothes, setClothes] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8000/clothes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClothes(data);
      });
  }, []);

  return (
    <>
      {clothes && (
        <div className="App">
          <div className="main__container">
            <Navbar />
            <Catalog clothes={clothes} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
