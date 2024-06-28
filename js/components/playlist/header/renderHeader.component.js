import { renderPlaylistTrack } from "../tracks/track/renderTrack.component.js";
import { playlists } from "../../../data.module.js";

export function renderPlaylistHeader(playlistForRendering) {
  renderPlaylistHeaderTitle(playlistForRendering);
  renderPlaylistHeaderCover(playlistForRendering);
}

function renderPlaylistHeaderCover(playlistForRendering) {
  const coverElement = document.createElement("img");
  coverElement.src = playlistForRendering.coverImageUrl;
  document.body.append(coverElement);
}

function renderPlaylistHeaderTitle(playlistForRendering) {
  const playListTitleElement = document.createElement("h2");
  playListTitleElement.append(playlistForRendering.title);
  document.body.append(playListTitleElement);
  const button = createButton("Delete");
  button.addEventListener('click', deleteButton)
  playListTitleElement.append(button);
}

function createButton(text) {
  const buttonEl = document.createElement('button');
  buttonEl.style.border = '5px solid red'
  buttonEl.append(text)
  return buttonEl;
}

export function deleteButton() {
  console.log('delete');
}