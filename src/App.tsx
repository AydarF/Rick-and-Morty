import React, { useContext } from "react";
import { Store } from "./Context";

function App(): JSX.Element {
  const { initialState } = useContext(Store);
  console.log({ initialState });
  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </>
  );
}

export default App;
