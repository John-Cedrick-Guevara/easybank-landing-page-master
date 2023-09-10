import { useState } from "react";

import "./App.css";
import NavComponent from "../Components/NavComponent";
import HeroComponent from "../Components/HeroComponent";
import Reasons from "../Components/Reasons";
import Articles from "../Components/Articles";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <NavComponent />
      <HeroComponent />
      <Reasons />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
