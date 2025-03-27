const images = document.querySelectorAll(".speaker-image");
const details = document.querySelectorAll(".speaker-details");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 2; // Start with the middle image

function updateSlider() {
  images.forEach((img, index) => {
    img.classList.remove("active", "left", "right","hidden");
    if (index === currentIndex) {
      img.classList.add("active");
    } else if (index === currentIndex - 1 || index === currentIndex + 1) {
      img.classList.add("left", "right");
    }
  });

  details.forEach((detail, index) => {
    detail.classList.remove("active");
    if (index === currentIndex) {
      detail.classList.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();

