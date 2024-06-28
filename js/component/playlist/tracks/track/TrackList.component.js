export function Tracklist() {
  const container = document.createElement("div");
  container.classList = "tracklist";

  const trackPanel = document.createElement("div");
  trackPanel.classList.add("add-track-panel");

  const trackTitle = document.createElement("h3");
  trackTitle.classList.add("tracklist-title");
  trackTitle.innerText = "Tracks";

  const buttonTrack = document.createElement("button");
  buttonTrack.classList = "button-add-track";
  const imgBtn = document.createElement("img");
  imgBtn.src = "img/icons/add.svg";
  const p = document.createElement("p");
  p.innerHTML = "Add Track";
  buttonTrack.append(imgBtn, p);

  trackPanel.append(trackTitle, buttonTrack);
  document.body.append(container);
  container.append(trackPanel);

  return container;
}
