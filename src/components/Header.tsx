import React from "react";

const Header = (props: any): JSX.Element => {
  const { favorites } = props;

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <span>
          <p>Pick your favorite episode</p>
          <p>Favorite episodes: {favorites.length}</p>
        </span>
      </header>
    </>
  );
};

export default Header;
