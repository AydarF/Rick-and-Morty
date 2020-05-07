import React from "react";
import { FetchData } from "./FetchData";

function App(): JSX.Element {
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
      <FetchData></FetchData>
    </>
  );
}

export default App;
