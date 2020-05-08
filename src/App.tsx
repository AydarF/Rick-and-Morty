import React, { useEffect, useContext, Suspense } from "react";
import { Store } from "./Store";
import { IEpisode, IAction, IEpisodeProps } from "./Interfaces";

import Header from "./components/Header";

const Episode = React.lazy<any>(() => import("./components/Episode"));

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

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavorite,
    favorites: state.favorites,
  };

  return (
    <>
      <Header {...props} />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            Loading...
          </div>
        }
      >
        <section className="episode-layout">
          <Episode {...props} />
        </section>
      </Suspense>
    </>
  );
}

export default App;
