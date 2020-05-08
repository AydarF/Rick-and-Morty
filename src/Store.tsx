import React, { useReducer } from "react";
import { reducer } from "./Reducer";
import { IState } from "./Interfaces";

const initialState: IState = {
  episodes: [],
  favorites: [],
};

const Store = React.createContext<IState | any>(initialState);

function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

export { StoreProvider, Store };
