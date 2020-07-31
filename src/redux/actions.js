const toggleListened = (item) => {
    return { type: "TOGGLE_LISTENED", item: item }
}

const toggleFavourite = (item) => {
    return { type: "TOGGLE_FAVOURTIE", item: item };
}

const addToPlaylist = (item) => {
  return { type: "ADD_TO_PLAYLIST", item: item };
};

export { addToPlaylist, toggleFavourite,toggleListened };
