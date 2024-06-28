import { Playlist } from "../../Playlist.component.js";
import { data } from "../../../../data/data.js";
export function AddPlaylist() {
  const container = document.querySelector(".playlistsNew");

  if (container) {
    container.appendChild(Playlist(data.playlists[0]));
  }
  return container;
}
