import { TrackBtn } from "./TrackBtn.component.js";

export function Track(trackParam) {
  const container = document.createElement("li");
  container.classList.add("track-element");

  const Img = document.createElement("img");
  Img.src = trackParam.trackCover;

  container.append(Img, TrackDetails(trackParam));
  return container;
}

function TrackDetails(TrackDetailsParam) {
  const container = document.createElement("div");
  container.classList.add("track-details");

  const trackTop = document.createElement("div");
  trackTop.classList.add("track-top-line");

  const statusIsHot = document.createElement("img");
  statusIsHot.classList.add("track-status");
  if (TrackDetailsParam.isHot) {
    statusIsHot.src = "img/icons/hot.svg";
    trackTop.append(statusIsHot);
  }

  const trackInfo = document.createElement("div");
  trackInfo.classList.add("track-info");

  trackTop.append(trackInfo);

  const trackAuthor = document.createElement("div");
  trackAuthor.classList.add("track-name");
  trackAuthor.innerText =
    TrackDetailsParam.trackAuthor + " - " + TrackDetailsParam.trackTitle;

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = TrackDetailsParam.trackAudio;
  container.append(trackTop, audio);

  trackInfo.append(trackAuthor);
  trackInfo.append(TrackBtn(TrackDetailsParam));

  return container;
}
