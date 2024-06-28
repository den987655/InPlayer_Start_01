import { Track } from "./track/track.componemt.js";

export function Tracks(tracksParam) {
  const container = document.createElement("ul");
  container.classList.add("list");

  tracksParam.forEach((element) => {
    container.append(Track(element));
  });

  return container;
}

