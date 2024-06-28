
export function renderPlaylistTrack(trackAny) {
  const trackElement = document.createElement("div");

  const coverElement = document.createElement("img");
  coverElement.src = trackAny.coverImageUrl;
  trackElement.append(coverElement);

  const trackTitleElement = document.createElement("div");

  if (trackAny.intrand) {
    trackElement.append("🔥");
  }

  trackElement.append(trackAny.artistName + " - " + trackAny.title);

  const audioElement = document.createElement("audio");
  audioElement.src = trackAny.fileUrl;
  audioElement.controls = true;

  trackElement.append(trackTitleElement, audioElement);

  document.body.append(trackElement);
}
