/* =========================
   HAPPY BIRTHDAY RAJA ❤️
   FINAL MOVIE EDITION
========================= */

// Background Music + Start Website

function startWebsite(){

const music = document.getElementById("bgMusic");

if(music){
music.volume = 0.5;
music.play().catch(()=>{});
}

const welcome = document.querySelector(".welcome");
const main = document.getElementById("main");

welcome.style.opacity = "0";

setTimeout(()=>{

welcome.style.display = "none";

main.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

setTimeout(()=>{
main.style.opacity="1";
},100);

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

heart.style.animationDuration=
(3+Math.random()*3)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);

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

setInterval(createFirework,1500);

/* =========================
   Slideshow
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

let current=0;

setInterval(()=>{

current++;

if(current>=photos.length){
current=0;
}

document.getElementById("slide").src=photos[current];

const memory=document.getElementById("memorySlide");

if(memory){
memory.src=photos[current];
}

},3000);
/* =========================
   Our Memories
========================= */

function showMemories(){

const section=document.getElementById("memorySection");

if(section){

section.style.display="block";

section.scrollIntoView({
behavior:"smooth"
});

}

}

/* =========================
   Bengali Letter
========================= */

function showLetter(){

document.getElementById("hiddenLetter").style.display="block";

document.getElementById("heartBtn").style.display="none";

document.getElementById("hiddenLetter").scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   Gift
========================= */

function openGift(){

document.querySelector(".gift-box").innerHTML="💖";

document.getElementById("giftMessage").style.display="block";

document.getElementById("giftMessage").scrollIntoView({
behavior:"smooth"
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

const video=document.querySelector("#proposalVideo video");

if(video){
video.load();
}

document.getElementById("proposalVideo").scrollIntoView({
behavior:"smooth"
});

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
   Cinematic Ending
========================= */

const proposalVideo = document.querySelector("#proposalVideo video");

if(proposalVideo){

proposalVideo.onended = function(){

// Show Ending Screen
const ending = document.getElementById("endingScreen");

ending.classList.add("show");

// Fade Out Music
const music = document.getElementById("bgMusic");

if(music){

let fade = setInterval(function(){

if(music.volume > 0.05){

music.volume -= 0.05;

}else{

music.volume = 0;

music.pause();

clearInterval(fade);

}

},300);

}

// Show Final Message after 8 seconds

setTimeout(function(){

ending.classList.remove("show");

ending.classList.add("hide");

const finalMessage = document.getElementById("finalMessage");

if(finalMessage){

finalMessage.style.display = "block";

finalMessage.scrollIntoView({
behavior:"smooth"
});

}

},8000);

};

}

/* =========================
   Replay Button (Optional)
========================= */

function replayStory(){

location.reload();

}

/* =========================
   Prevent Multiple Clicks
========================= */

const yesBtn = document.getElementById("yesBtn");

if(yesBtn){

yesBtn.addEventListener("click",function(){

yesBtn.disabled = true;

setTimeout(function(){

yesBtn.disabled = false;

},3000);

});

}

/* =========================
   Preload Images
========================= */

photos.forEach(function(src){

const img = new Image();

img.src = src;

});

/* =========================
   End of Script
========================= */
