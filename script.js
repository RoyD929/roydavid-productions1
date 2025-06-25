window.addEventListener("scroll", function () {
  const welcomeText = document.getElementById("welcomeText");
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    welcomeText.style.opacity = 0;
  } else {
    welcomeText.style.opacity = 1;
  }
});
