import { AddPlaylistPanel } from "./AddPlaylistPanel/AddPlaylistPanel.component.js";
import { Playlists } from "../../Playlists.component.js";
import { data } from "../../../data/data.js";

export function Root() {
  const root = document.getElementById("root");
root.append(App());
}

export function App() {
  const container = document.createElement("div");
  container.classList = "App";
  // в header мы передали параметр dataApp, и вызвали функцию Header с параметром и обратились к данным

  container.append(Header(), Main());
  return container;
}

export function Main() {
  const container = document.createElement("main");
  container.append(AddPlaylistPanel(), Playlists(data.playlists));
  return container;
}

export function Header() {
  const container = document.createElement("header");
  const headerContainer = document.createElement("div");
  headerContainer.classList = "header-container";

  const hoverImg = document.createElement("img");
  hoverImg.src = "img/logo/logo.svg";

  const logoName = document.createElement("div");
  logoName.classList = "logo-name";
  logoName.innerText = "InPlayer";

  container.append(headerContainer);
  headerContainer.append(hoverImg, logoName);

  // мы передали в функцию AddPlaylistPanel, параметр функции Header и обратились к объекту playListInfo

  return container;
}
