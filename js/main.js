const smallImages = document.querySelectorAll(".small-images a");
const popup = document.querySelector(".popup");
const bigImage = document.querySelector(".popup .image-slider img");
const prevIcon = document.querySelector(".prev-icon");
const nextIcon = document.querySelector(".next-icon");

let currentImageIndex = 0;

function openBigImagePopup(imgPopup) {
  imgPopup.style.display = "flex";
}

function closeBigImagePopup(imgPopup) {
  imgPopup.style.display = "none";
}

function showImage() {
  const smallImgSrc = smallImages[currentImageIndex].getAttribute("href");
  bigImage.setAttribute("src", smallImgSrc);
}

function showPreviousImage() {
  if (currentImageIndex === 0) {
    currentImageIndex = smallImages.length - 1;
  } else {
    currentImageIndex--;
  }
  showImage();
}

function showNextImage() {
  if (currentImageIndex === smallImages.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  showImage();
}

smallImages.forEach((smallImage, index) => {
  smallImage.addEventListener("click", function (e) {
    e.preventDefault();
    currentImageIndex = index;
    showImage();
    openBigImagePopup(popup);
  });
});

prevIcon.addEventListener("click", showPreviousImage);
nextIcon.addEventListener("click", showNextImage);

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("popup")) {
    closeBigImagePopup(popup);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeBigImagePopup(popup);
  } else if (e.key === "ArrowLeft") {
    showPreviousImage();
  } else if (e.key === "ArrowRight") {
    showNextImage();
  }
});
