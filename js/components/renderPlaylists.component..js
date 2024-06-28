export function renderPlaylists(inputPlaylists) {
  inputPlaylists.forEach((element) => {
    let playLists = element;
    renderPlaylist(playLists);
  });
}

import { renderPlaylist } from "./playlist/renderPlaylist.component.js";
