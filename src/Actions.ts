import { IState, IEpisode, IAction } from "./Interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const url =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-marty&embed=episodes";

  const data = await fetch(url);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavorite = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
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
