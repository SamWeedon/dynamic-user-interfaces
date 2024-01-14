const circleList = document.querySelectorAll(".circle");
const imgList = document.querySelectorAll("img");

function next() {
  if (imgList[imgList.length - 1].dataset.hidden === "true") {
    for (let i = 0; i < imgList.length - 1; i++) {
      if (imgList[i].dataset.hidden === "false") {
        imgList[i].dataset.hidden = "true";
        imgList[i + 1].dataset.hidden = "false";
        styleCircles(circleList[i + 1]);
        break;
      }
    }
  } else {
    imgList.forEach((image) => {
      image.dataset.hidden = "true";
    });
    imgList[0].dataset.hidden = "false";
    styleCircles(circleList[0]);
  }
}

function previous() {
  if (imgList[0].dataset.hidden === "true") {
    for (let i = 1; i < imgList.length; i++) {
      if (imgList[i].dataset.hidden === "false") {
        imgList[i].dataset.hidden = "true";
        imgList[i - 1].dataset.hidden = "false";
        styleCircles(circleList[i - 1]);
        break;
      }
    }
  } else {
    imgList.forEach((image) => {
      image.dataset.hidden = "true";
    });
    imgList[imgList.length - 1].dataset.hidden = "false";
    styleCircles(circleList[imgList.length - 1]);
  }
}

function styleCircles(clickedCircle) {
  circleList.forEach((circle) => {
    circle.dataset.active = "false";
  });
  clickedCircle.dataset.active = "true";
}

function goToSlide(linkedSlide) {
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
for (let i = 0; i < circleList.length; i++) {
  circleList[i].addEventListener("click", (e) => {
    styleCircles(e.target);
    goToSlide(imgList[i]);
  });
}

const advanceSlide = setInterval(next, 5000);

nextButton.addEventListener("click", () => clearInterval(advanceSlide));
backButton.addEventListener("click", () => clearInterval(advanceSlide));
