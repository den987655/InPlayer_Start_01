import { data } from "./data/data.js";
import { Playlists } from "./component/Playlists.component.js";
import { Root } from "./component/playlist/header/Header.component.js";
import { App } from "./component/playlist/header/Header.component.js";
import { Main } from "./component/playlist/header/Header.component.js";
import { Header } from "./component/playlist/header/Header.component.js";

Root()
App()
Main()
Header()

Playlists(data.playlists)
