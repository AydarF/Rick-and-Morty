import React from "react";

import Header from "./components/Header";

function App(props: any): JSX.Element {
  return (
    <>
      <Header {...props} />
      {props.children}
    </>
  );
}

export default App;
