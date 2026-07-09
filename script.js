function startWebsite() {
  const welcome = document.querySelector(".welcome");
  const main = document.getElementById("main");

  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    main.style.display = "block";
    main.style.opacity = "0";

    setTimeout(() => {
      main.style.transition = "opacity 1.5s";
      main.style.opacity = "1";
    }, 100);

  }, 800);
}
