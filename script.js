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
function confetti(){

const c=document.createElement("div");

c.innerHTML="🎊";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize="30px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{
c.style.top="110vh";
},50);

setTimeout(()=>{
c.remove();
},4500);

}

setInterval(confetti,400);
const photos=[
"photos/1.jpg",
"photos/2.jpg",
"photos/3.jpg",
"photos/4.jpg",
"photos/5.jpg",
"photos/6.jpg",
"photos/7.jpg",
"photos/8.jpg",
"photos/9.jpg",
"photos/10.jpg",
"photos/11.jpg",
"photos/12.jpg"
];

let current=0;

setInterval(()=>{

current++;

if(current>=photos.length){
current=0;
}

document.getElementById("slide").src=photos[current];

},3000);
