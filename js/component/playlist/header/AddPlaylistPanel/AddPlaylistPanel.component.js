import { AddPlaylist } from "./addPlaylist.component.js";

export function AddPlaylistPanel() {
  const container = document.createElement("div");
  container.classList = "add-playlist-panel";

  const headerTitle = document.createElement("h1");
  headerTitle.classList = "title";
  headerTitle.innerText = "My playlists";

  const button = document.createElement("button");
  button.classList = "button";
  button.innerText = "Add Playlist";

  button.addEventListener("click", AddPlaylist);

  container.append(headerTitle, button);

  document.body.append(container);
  return container;
}
