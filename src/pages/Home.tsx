import React, { useEffect, useContext, Suspense } from "react";
import { Store } from "../Store";
import { IEpisodeProps } from "../Interfaces";
import { fetchDataAction, toggleFavorite } from "../Actions";

const Episode = React.lazy<any>(() => import("../components/Episode"));

const Home = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavorite,
    favorites: state.favorites,
  };

  return (
    <>
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
};

export default Home;
