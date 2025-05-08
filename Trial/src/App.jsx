import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Contect from "./Pages/Contect";

const data = createContext();
const data1 = createContext();
// const data1=createContext(); this si code for cotextapi code everytime we have to repeate and create context and provider and consume when we need
//data.consumer ae only arrow function take so if we have to pass as nested functions //

function App() {
  const name = "purvi";
  const gender = "female";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Header />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}
export default App;
export { data, data1 };
