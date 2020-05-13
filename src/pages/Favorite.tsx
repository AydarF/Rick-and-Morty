import React, { useContext, Suspense } from "react";
import { Store } from "../Store";
import { IEpisodeProps } from "../Interfaces";
import { toggleFavorite } from "../Actions";

const Episode = React.lazy<any>(() => import("../components/Episode"));

const Favorite = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavorite,
    favorites: state.favorites,
  };
  return (
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
  );
};

export default Favorite;
