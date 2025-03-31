const images = document.querySelectorAll(".speaker-image");
const details = document.querySelectorAll(".speaker-details");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 2; // Start with the middle image

function updateSlider() {
  images.forEach((img, index) => {
    img.classList.remove("active", "left", "right", "hidden");
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

function startCountdown(targetDate) {

  function updateTimer() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      clearInterval(timer);
      return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor(difference / ((1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").innerText = String(days);
    document.getElementById("hours").innerText = String(hours);
    document.getElementById("minutes").innerText = String(minutes);
    document.getElementById("seconds").innerText = String(seconds);
  }

  updateTimer();
  const timer = setInterval(updateTimer, 1000);
}
updateSlider();

const eventDate = new Date(2025, 3, 6, 0, 0, 0);
startCountdown(eventDate);


