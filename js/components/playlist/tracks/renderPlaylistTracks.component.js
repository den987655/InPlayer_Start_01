import { renderPlaylistTrack } from "./track/renderTrack.component.js";

export function renderPlaylistTracks(tracks) {
  tracks.map((element) => {
    let track = element;
    renderPlaylistTrack(track);
  });
}

