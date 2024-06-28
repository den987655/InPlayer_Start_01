const data = {
  playlists: [
    {
      playListInfo: {
        id: "0",
        titile: "Hip-Hop Hits",
        playlistCover: "/InPlayer_Start_01/img/cardImage/image1.jpeg",
      },

      tracks: [
        {
          trackId: "1",
          trackAuthor: "Eminem",
          trackTitle: "Rap God",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track1.jpeg",
          trackAudio: "/InPlayer_Start_01/audio/Eminem - Rap God.mp3",
          isHot: true,
        },
        {
          trackId: "2",
          trackAuthor: "50 cent",
          trackTitle: "In da Club",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track2.jpeg",
          trackAudio: "/InPlayer_Start_01/audio/50cent - In da club.mp3",
          isHot: false,
        },
        {
          trackId: "3",
          trackAuthor: "DMX",
          trackTitle: "X Gon' Give It To Ya",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track3.jpeg",
          trackAudio: "/InPlayer_Start_01/audio/DMX - X Gon`Give It To Ya.mp3",
          isHot: true,
        },
        {
          trackId: "4",
          trackAuthor: "Eminem feat 50 Cent, Cashis,",
          trackTitle: "Lloyd Banks - You Don't Know",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track4.jpeg",
          trackAudio: "/InPlayer_Start_01/audio/Eminem - You Don`t Know.mp3",
          isHot: true,
        },
      ],
    },
    {
      playListInfo: {
        id: "1",
        titile: "Rap Hits 1990s",
        playlistCover: "/InPlayer_Start_01/img/cardImage/image2.jpeg",
      },

      tracks: [
        {
          trackId: "1",
          trackAuthor: "Public Enemy",
          trackTitle: "Fight the Power",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track5.jpeg",
          trackAudio:
            "/InPlayer_Start_01/audio/Public Enemy - Fight The Power.mp3",
          isHot: true,
        },
        {
          trackId: "2",
          trackAuthor: "Vanila Ice",
          trackTitle: "Ice Ice Baby",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track6.jpeg",
          trackAudio: "/InPlayer_Start_01/audio/Vanila Ice - Ice Baby.mp3",
          isHot: false,
        },
        {
          trackId: "3",
          trackAuthor: "MC Hammer",
          trackTitle: "You Can`t Touch This",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track7.jpeg",
          trackAudio:
            "/InPlayer_Start_01/audio/Mc Hammer - You Can`t Touch This.mp3",
          isHot: true,
        },
        {
          trackId: "4",
          trackAuthor: "Brand Nubian",
          trackTitle: "Brand Nubian",
          trackCover: "/InPlayer_Start_01/img/cardImage/trackList/track8.jpeg",
          trackAudio:
            "/InPlayer_Start_01/audio/Brand Nubian - Brand Nubian.mp3",
          isHot: true,
        },
      ],
    },
  ],
};

// <div class="App">
function App() {
  const container = document.createElement("div");
  container.classList = "App";
  // в header мы передали параметр dataApp, и вызвали функцию Header с параметром и обратились к данным

  container.append(Header(), Main());
  return container;
}

function Main() {
  const container = document.createElement("main");
  container.append(AddPlaylistPanel(), Playlists(data.playlists));
  return container;
}

{
  /* <header>
                <div class="header-container">
                    <img src="img/logo/logo.svg" alt="logo">
                    <div class="logo-name">InPlayer</div>
                </div>
            </header> */
}

//------------------------------------------------------------

function Header() {
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

// <div class="add-playlist-panel">
//     <h1 class="title">My playlists</h1>
//     <button class="button">Add Playlist</button>
// </div>

function AddPlaylistPanel() {
  const container = document.createElement("div");
  container.classList = "add-playlist-panel";

  const headerTitle = document.createElement("h1");
  headerTitle.classList = "title";
  headerTitle.innerText = "My playlists";

  const button = document.createElement("button");
  button.classList = "button";
  button.innerText = "Add Playlist";

  button.addEventListener("click", AddPlaylist);

  container.append(headerTitle, button);

  document.body.append(container);
  return container;
}
{
  /* <div class="playlists"></div> */
}
function AddPlaylist() {
  // const playlistsContainer = document.createElement("div");
  // playlistsContainer.classList.add('playlists')

  const container = document.querySelector(".playlists123");

  if (container) {
    container.appendChild(Playlist(data.playlists[0]));
  }
  return container;
}
// <div class="playlists">
// function Playlists(playlistsparam) {
//   const container = document.createElement("div");
//   container.classList = "playlists123";

//   playlistsparam.forEach((element) => {
//     container.append(Playlist(element));
//   });
//   return container;
// }

//<article class="playlist"></article>
function Playlist(playParam) {
  const container = document.createElement("article");
  container.classList = "playlist";

  container.append(
    PlaylistInfo(playParam.playListInfo),
    Tracklist(),
    Tracks(playParam.tracks)
  );

  return container;
}

{
  /* <div class="playlist-info">
                            <img class="playlist-cover-image" src="img/cardImage/image1.jpeg" alt="cover">
                            <div>
                                <h2 class="title">Hip-Hop Hits</h2>
                                <div class="tracks-count">4 tracks</div>
                            </div>
                            <div class="buttons-container">
                                <button><img class="button-icon" src="img/icons/edit.svg" alt="edit"></button>
                                <button><img class="button-icon" src="img/icons/basket.svg" alt="delete"></button>
                            </div>
                        </div> */
}

function PlaylistInfo(playl) {
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
{
  /* <div class="tracklist"></div> */
}

{
  /*                         <div class="add-track-panel">
                                <h3 class="tracklist-title">Tracks</h3>
                                <button class="button-add-track">
                                    <img src="img/icons/add.svg" alt="add">Add Track
                                </button>
                            </div> */
}
function Tracklist() {
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
//  <ul class="list"></ul>
{
  /* <li class="track-element">
                                    <img class="track-cover-image" src="img/cardImage/trackList/track1.jpeg"
                                        alt="track-cover">
                                    <div class="track-details">
                                        <div class="track-top-line">
                                            <img class="track-status" src="img/icons/hot.svg" alt="hot">
                                            <div class="track-info">
                                                <div class="track-name">Eminem - Rap God</div>
                                                <div class="buttons-container">
                                                    <button><img class="button-icons" src="img/icons/edit.svg"
                                                            alt="edit"></button>
                                                    <button><img class="button-icons" src="img/icons/basket.svg"
                                                            alt="delete"></button>
                                                </div>
                                            </div>
                                        </div>
                                        <audio controls src="audio/Eminem - Rap God.mp3"></audio>
                                    </div>
                                </li> */
}
function Tracks(tracksParam) {
  const container = document.createElement("ul");
  container.classList.add("list");

  tracksParam.forEach((element) => {
    container.append(Track(element));
  });

  return container;
}

function Track(trackParam) {
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

function TrackBtn() {
  const container = document.createElement("div");
  container.classList.add("buttons-container");

  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");

  const imgBtn1 = document.createElement("img");
  imgBtn1.src = "img/icons/edit.svg";
  imgBtn1.classList.add("button-icons");
  btn1.append(imgBtn1);

  const imgBtn2 = document.createElement("img");
  imgBtn2.classList.add("button-icons");
  imgBtn2.src = "img/icons/basket.svg";
  btn2.append(imgBtn2);

  container.append(btn1, btn2);
  return container;
}

const root = document.getElementById("root");
root.append(App());
