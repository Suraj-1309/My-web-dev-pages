import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "hitesh",
    age : 21,
  }

  let newArr = [1, 2, 3];


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">
        Taiilwind Test
      </h1>
      <Card username="Suraj" btnText="Click me" />
      <Card username="Nika" />
    </>
  );
}

export default App;
