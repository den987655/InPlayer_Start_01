import { renderPlaylistHeader } from "./header/renderHeader.component.js";
import { renderPlaylistTracks } from "./tracks/renderPlaylistTracks.component.js";
import { deleteButton } from "./header/renderHeader.component.js";
export function renderPlaylist(playlistForRendering) {
  renderPlaylistHeader(playlistForRendering);
  renderPlaylistTracks(playlistForRendering.tracks);
}

deleteButton()


