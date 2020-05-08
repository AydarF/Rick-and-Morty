import React, { useEffect, useContext } from "react";
import { Store } from "./Store";
import { IEpisode, IAction } from "./Interfaces";

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const url =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-marty&embed=episodes";

    const data = await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavorite = (episode: IEpisode): IAction => {
    const favEpisode = state.favorites.includes(episode);

    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };

    if (favEpisode) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };

  console.log(state);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <span>
          <p>Pick your favorite episode</p>
          <p>Favorite episodes: {state.favorites.length}</p>
        </span>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id} className="episode-box">
            {episode.image !== null ? (
              <img
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
              />
            ) : (
              <div className="episode-image-unavailable">
                No Image Available At This Time
              </div>
            )}
            <div>{episode.name}</div>
            <section>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type="button" onClick={() => toggleFavorite(episode)}>
                {state.favorites.find((fav: IEpisode) => fav.id === episode.id)
                  ? "Remove Episode"
                  : "Add Episode"}
              </button>
            </section>
          </section>
        ))}
      </section>
    </>
  );
}

export default App;
