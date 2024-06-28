// data
import { playlists } from "./data.module.js";
import { renderPlaylists } from "./components/renderPlaylists.component.js";

// render
renderPlaylists(playlists);
// function renderTrack(track) {
//   const container = document.createElement('ul')
//   container.classList.add('list')

//   const coverTrackImg = document.createElement("li");
//   coverTrackImg.src = "track1.png";

//   container.append(coverTrackImg)

//   return container
// }
