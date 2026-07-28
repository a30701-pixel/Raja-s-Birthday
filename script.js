/* =========================
   Start Website
========================= */

function startWebsite(){

const music=document.getElementById("bgMusic");

if(music){

music.volume=.5;

music.play().catch(()=>{});

}

const welcome=document.getElementById("welcome");

const main=document.getElementById("main");

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

main.style.display="block";

setTimeout(()=>{

main.style.opacity="1";

},100);

window.scrollTo({
top:0,
behavior:"smooth"
});

},800);

}

/* =========================
   Floating Hearts
========================= */

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

/* =========================
   Rose Petals
========================= */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*4)+"s";

document.getElementById("rosePetals").appendChild(petal);

setTimeout(()=>{
petal.remove();
},9000);

}

setInterval(createPetal,700);

/* =========================
   Stars
========================= */

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

document.getElementById("stars").appendChild(star);

}

/* =========================
   Fireworks
========================= */

function createFirework(){

const fw=document.createElement("div");

fw.className="firework";

fw.innerHTML="🎆";

fw.style.left=Math.random()*100+"vw";

fw.style.top=Math.random()*100+"vh";

document.getElementById("fireworks").appendChild(fw);

setTimeout(()=>{
fw.remove();
},1500);

}
/* =========================
   Main Slideshow
========================= */

const photos=[

"1.jpg.png",
"2.jpg.png",
"3.jpg.png",
"4.jpg.png",
"5.jpg.png",
"6.jpg.png",
"7.jpg.png",
"8.jpg.png",
"9.jpg.png",
"file_000000008bc071f5a828a2012647a923.png",
"11.jpg.png",
"12.jpg.png",
"13.jpg.png",
"file_0000000003447207886866ec4a13f04b.png",
"15.jpg.png",
"16.jpg.png"

];

let currentSlide=0;

setInterval(()=>{

currentSlide++;

if(currentSlide>=photos.length){

currentSlide=0;

}

document.getElementById("slide").src=photos[currentSlide];

},2500);

/* =========================
   Our Memories Gallery
========================= */

let memoryStarted=false;

let memorySlide=0;

function showMemories(){

const section=document.getElementById("memorySection");

section.style.display="block";

document.getElementById("memoryBtn").style.display="none";

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

section.scrollIntoView({

behavior:"smooth"

});

}

/* =========================
   Bengali Letter
========================= */

function showLetter(){

document.getElementById("heartBtn").style.display="none";

document.getElementById("hiddenLetter").style.display="block";

document.getElementById("hiddenLetter").scrollIntoView({

behavior:"smooth",
block:"start"

});

}

/* =========================
   Gift
========================= */

function openGift(){

document.querySelector(".gift-box").innerHTML="💖";

const msg=document.getElementById("giftMessage");

msg.style.display="block";

msg.scrollIntoView({

behavior:"smooth",
block:"center"

});

}
/* =========================
   Proposal
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

document.getElementById("proposalVideo").scrollIntoView({

behavior:"smooth",
block:"center"

});

video.play().catch(()=>{});

setInterval(createFirework,500);

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
"😏 Okay... I'll keep waiting for you forever ❤️";

noBtn.style.display="none";

}

}

/* =========================
   Ending Screen
========================= */

const personalVideo=document.getElementById("personalVideo");

if(personalVideo){

personalVideo.onended=function(){

const ending=document.getElementById("endingScreen");

ending.classList.add("show");

const music=document.getElementById("bgMusic");

if(music){

music.volume=0.15;

}

setTimeout(()=>{

ending.classList.remove("show");

ending.classList.add("hide");

document.getElementById("finalMessage").style.display="block";

document.getElementById("finalMessage").scrollIntoView({

behavior:"smooth"

});

},8000);

};

}
/* =========================
   Replay Story
========================= */

function replayStory(){

window.scrollTo({

top:0,

behavior:"smooth"

});

document.getElementById("finalMessage").style.display="none";

const ending=document.getElementById("endingScreen");

ending.classList.remove("show");
ending.classList.remove("hide");

const music=document.getElementById("bgMusic");

if(music){

music.currentTime=0;

music.volume=.5;

music.play().catch(()=>{});

}

}

/* =========================
   Preload Images
========================= */

photos.forEach(src=>{

const img=new Image();

img.src=src;

});

/* =========================
   Smooth Image Loading
========================= */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/* =========================
   Fade Music Before Ending
========================= */

function fadeMusic(){

const music=document.getElementById("bgMusic");

if(!music) return;

const fade=setInterval(()=>{

if(music.volume>0.05){

music.volume-=0.05;

}else{

music.volume=0;

clearInterval(fade);

}

},300);

}

/* =========================
   Extra Rose Petals
========================= */

function finalRoseRain(){

let count=0;

const rain=setInterval(()=>{

createPetal();

count++;

if(count>=40){

clearInterval(rain);

}

},180);

}

/* =========================
   Final Ending Effects
========================= */

const endVideo=document.getElementById("personalVideo");

if(endVideo){

endVideo.addEventListener("ended",()=>{

fadeMusic();

finalRoseRain();

});

}

/* =========================
   Prevent Double Click
========================= */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.blur();

});

});

/* =========================
   End Of Script
========================= */

console.log("❤️ Happy Birthday Raja - Premium Edition ❤️");
function hideAllSections(){

document.getElementById("memorySection").style.display="none";

document.getElementById("hiddenLetter").style.display="none";

document.querySelector(".video-section").style.display="none";

document.querySelector(".gift-section").style.display="none";

document.querySelector(".proposal-section").style.display="none";

document.getElementById("finalMessage").style.display="none";

}
