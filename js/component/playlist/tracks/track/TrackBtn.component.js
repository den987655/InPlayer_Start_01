export function TrackBtn() {
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
