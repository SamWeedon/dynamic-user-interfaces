function next() {
  const imgList = document.querySelectorAll("img");
  const circleList = document.querySelectorAll(".circle");
  for (let i = 0; i < imgList.length - 1; i++) {
    if (imgList[i].dataset.hidden === "false") {
      imgList[i].dataset.hidden = "true";
      imgList[i + 1].dataset.hidden = "false";
      styleCircles(circleList[i + 1]);
      break;
    }
  }
}

function previous() {
  const imgList = document.querySelectorAll("img");
  for (let i = 1; i < imgList.length; i++) {
    if (imgList[i].dataset.hidden === "false") {
      imgList[i].dataset.hidden = "true";
      imgList[i - 1].dataset.hidden = "false";
      styleCircles(circleList[i - 1]);
      break;
    }
  }
}

function styleCircles(clickedCircle) {
  const circleList = document.querySelectorAll(".circle");
  circleList.forEach((circle) => {
    circle.dataset.active = "false";
  });
  clickedCircle.dataset.active = "true";
}

function goToSlide(linkedSlide) {
  const imgList = document.querySelectorAll("img");
  imgList.forEach((image) => {
    image.dataset.hidden = "true";
  });
  linkedSlide.dataset.hidden = "false";
}

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");

nextButton.addEventListener("click", next);
backButton.addEventListener("click", previous);

// deal with circles
const circleList = document.querySelectorAll(".circle");
const imgList = document.querySelectorAll("img");
for (let i = 0; i < circleList.length; i++) {
  circleList[i].addEventListener("click", (e) => {
    styleCircles(e.target);
    goToSlide(imgList[i]);
  });
}
