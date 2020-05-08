import React, { useContext } from "react";
import { Link } from "@reach/router";
import { Store } from "../Store";

const Header = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <span>
          <p>Pick your favorite episode</p>
        </span>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favorites">
            Favorite episodes: {state.favorites.length}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
