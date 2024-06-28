import { Tracks } from "./tracks/Tracks.component.js";
import { PlaylistInfo } from "./tracks/track/PlayListInfo.component.js";
import { Tracklist } from "./tracks/track/TrackList.component.js";

export function Playlist(playParam) {
  const container = document.createElement("article");
  container.classList = "playlist";

  container.append(
    PlaylistInfo(playParam.playListInfo),
    Tracklist(),
    Tracks(playParam.tracks)
  );

  return container;
}
