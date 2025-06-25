window.addEventListener("scroll", function () {
  const welcomeText = document.getElementById("welcomeText");
  if (window.scrollY > 50) {
    welcomeText.style.opacity = 0;
  } else {
    welcomeText.style.opacity = 1;
  }
});
