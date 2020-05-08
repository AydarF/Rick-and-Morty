import React from "react";
import { IEpisode } from "../Interfaces";

const Episode = (props: any): Array<JSX.Element> => {
  const { episodes, favorites, toggleFavorite } = props;
  return episodes.map((episode: IEpisode) => (
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
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button type="button" onClick={() => toggleFavorite(episode)}>
          {favorites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Remove Episode"
            : "Add Episode"}
        </button>
      </section>
    </section>
  ));
};

export default Episode;
