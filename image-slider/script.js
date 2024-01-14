function next() {
  const imgList = document.querySelectorAll("img");
  for (let i = 0; i < imgList.length; i++) {
    if (imgList[i].dataset.hidden === "false") {
      imgList[i].dataset.hidden = "true";
      imgList[i + 1].dataset.hidden = "false";
      break;
    }
  }
}

function previous() {
  const imgList = document.querySelectorAll("img");
  for (let i = 0; i < imgList.length; i++) {
    if (imgList[i].dataset.hidden === "false") {
      imgList[i].dataset.hidden = "true";
      imgList[i - 1].dataset.hidden = "false";
      break;
    }
  }
}

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");

nextButton.addEventListener("click", next);
backButton.addEventListener("click", previous);
