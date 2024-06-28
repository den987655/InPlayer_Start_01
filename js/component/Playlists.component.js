// <div class="playlists">
import { Playlist } from "./playlist/Playlist.component.js";

export function Playlists(playlistsparam) {
  const container = document.createElement("div");
  container.classList = "playlistsNew";

  playlistsparam.forEach((element) => {
    container.append(Playlist(element));
  });
  return container;
}