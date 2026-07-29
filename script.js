/* =========================
   HAPPY BIRTHDAY RAJA ❤️
   FINAL SCRIPT
========================= */

/* =========================
   PHOTO LIST
========================= */

const photos = [
"1.jpg.png",
"2.jpg.png",
"3.jpg.png",
"4.jpg.png",
"5.jpg.png",
"6.jpg.png",
"7.jpg.png",
"8.jpg.png",
"9.jpg.png",
"10.jpg.png",
"11.jpg.png",
"12.jpg.png",
"13.jpg.png",
"14.jpg.png",
"15.jpg.png",
"16.jpg.png"
];

/* =========================
   START WEBSITE
========================= */

function startWebsite(){

const welcome=document.getElementById("welcome");
const main=document.getElementById("main");

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

main.style.display="block";

setTimeout(()=>{

main.style.opacity="1";

},100);

},800);

const music=document.getElementById("bgMusic");

if(music){

music.volume=0.5;

music.play().catch(()=>{});

}

createStars();
startHearts();
startPetals();

}

/* =========================
   MAIN SLIDESHOW
========================= */

let slideIndex=0;

setInterval(()=>{

slideIndex++;

if(slideIndex>=photos.length){

slideIndex=0;

}

const img=document.getElementById("slide");

if(img){

img.style.opacity="0";

setTimeout(()=>{

img.src=photos[slideIndex];
img.style.opacity="1";

},300);

}

},3000);

/* =========================
   MEMORY SLIDESHOW
========================= */

let memoryIndex=0;
let memoryStarted=false;

function showMemories(){

document.getElementById("memoryBtn").style.display="none";

const section=document.getElementById("memorySection");

section.style.display="block";

/* উপরের slideshow লুকাবে */
document.querySelector(".slideshow").style.display="none";

/* পরের button দেখাবে */
document.getElementById("heartBtn").style.display="inline-block";

section.scrollIntoView({
behavior:"smooth",
block:"start"
});

if(!memoryStarted){

memoryStarted=true;

setInterval(()=>{

memorySlide++;

if(memorySlide>=photos.length){
memorySlide=0;
}

document.getElementById("memorySlide").src=photos[memorySlide];

},2200);

}

}


/* =========================
   LOVE LETTER
========================= */

function showLetter(){

document.getElementById("heartBtn").style.display="none";

const letter=document.getElementById("hiddenLetter");

letter.style.display="block";

letter.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

/* =========================
   GIFT
========================= */

function openGift(){

document.querySelector(".gift-box").innerHTML="💖";

const gift=document.getElementById("giftMessage");

gift.style.display="block";

gift.scrollIntoView({
behavior:"smooth",
block:"center"
});

}

/* =========================
   PROPOSAL
========================= */

let noCount=0;

function yesAnswer(){

document.getElementById("proposalReply").style.display="block";

document.getElementById("proposalReply").innerHTML=
"🥹❤️ Yaaay!! You made me the happiest person in the world! ❤️";

document.getElementById("proposalVideo").style.display="block";

document.getElementById("rings").style.display="block";

document.getElementById("ringMessage").style.display="block";

const video=document.getElementById("personalVideo");

video.load();

video.play().catch(()=>{});

document.getElementById("proposalVideo").scrollIntoView({
behavior:"smooth",
block:"center"
});

createFireworks();

}

function noAnswer(){

noCount++;

const noBtn=document.getElementById("noBtn");

const x=Math.random()*(window.innerWidth-120);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

if(noCount>=5){

document.getElementById("proposalReply").style.display="block";

document.getElementById("proposalReply").innerHTML=
"🥹 Okay... I'll wait forever for your Yes ❤️";

noBtn.style.display="none";

}

}

/* =========================
   FIREWORKS
========================= */

function createFireworks(){

const box=document.getElementById("fireworks");

for(let i=0;i<25;i++){

const fire=document.createElement("div");

fire.className="firework";

fire.innerHTML=["✨","🎆","💖"][Math.floor(Math.random()*3)];

fire.style.left=Math.random()*100+"vw";
fire.style.top=Math.random()*100+"vh";

box.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1500);

}

    }
/* =========================
   STARS
========================= */

function createStars(){

const box=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
star.style.animationDelay=Math.random()*2+"s";

box.appendChild(star);

}

}

/* =========================
   FLOATING HEARTS
========================= */

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(4+Math.random()*4)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},500);

}

/* =========================
   ROSE PETALS
========================= */

function startPetals(){

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";
petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";
petal.style.animationDuration=(5+Math.random()*4)+"s";

document.getElementById("rosePetals").appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

},700);

}

/* =========================
   ENDING SCREEN
========================= */

const personalVideo=document.getElementById("personalVideo");

if(personalVideo){

personalVideo.onended=function(){

const ending=document.getElementById("endingScreen");

ending.classList.add("show");

setTimeout(()=>{

ending.classList.remove("show");

document.getElementById("finalMessage").style.display="block";

document.getElementById("finalMessage").scrollIntoView({

behavior:"smooth"

});

},8000);

};

}

/* =========================
   REPLAY STORY
========================= */

function replayStory(){

location.reload();

}

/* =========================
   PRELOAD IMAGES
========================= */

photos.forEach(src=>{

const img=new Image();

img.src=src;

});

/* =========================
   BUTTON BLUR
========================= */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.blur();

});

});

console.log("❤️ Happy Birthday Raja - Final Edition ❤️");
