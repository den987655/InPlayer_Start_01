export function PlaylistInfo(playl) {
  const container = document.createElement("div");
  container.classList = "playlist-info";

  const img = document.createElement("img");
  img.src = playl.playlistCover;
  img.classList = "playlist-cover-image";

  const div = document.createElement("div");
  const headerTitle = document.createElement("h2");
  headerTitle.classList = "title";
  headerTitle.innerText = playl.titile;

  const trackCount = document.createElement("div");
  trackCount.classList = "tracks-count";
  trackCount.innerText = "4 tracks";

  div.append(headerTitle, trackCount);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList = "buttons-container";

  const buttonOne = document.createElement("button");
  buttonOne.classList = "button-icon";
  const imgBtn1 = document.createElement("img");
  imgBtn1.src = "img/icons/edit.svg";
  buttonOne.append(imgBtn1);

  const buttonTwo = document.createElement("button");
  buttonTwo.classList = "button-icon";
  const imgBtn2 = document.createElement("img");
  imgBtn2.src = "img/icons/basket.svg";
  buttonTwo.append(imgBtn2);

  buttonContainer.append(buttonOne, buttonTwo);
  container.append(img, div, buttonContainer);

  return container;
}
