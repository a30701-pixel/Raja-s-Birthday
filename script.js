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
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(3+Math.random()*3)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,300);
for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.getElementById("stars").appendChild(star);

}
