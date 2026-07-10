function startWebsite() {
    const welcome = document.querySelector(".welcome");
    const main = document.getElementById("main");

    welcome.style.opacity = "0";

    setTimeout(() => {
        welcome.style.display = "none";
        main.style.display = "block";

        setTimeout(() => {
            main.style.opacity = "1";
        }, 100);

    }, 800);
}

/* ❤️ Floating Hearts */

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

/* ✨ Stars */

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.getElementById("stars").appendChild(star);

}

/* 🎊 Confetti */

function confetti(){

    const c=document.createElement("div");

    c.innerHTML="🎊";

    c.style.position="fixed";

    c.style.left=Math.random()*100+"vw";

    c.style.top="-30px";

    c.style.fontSize="28px";

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

/* 📸 Slideshow */

const photos=[
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"file_000000008bc071f5a828a2012647a923.jpg",
"11.jpg",
"12.jpg",
"13.jpg",
"file_0000000003447207886866ec4a13f04b.jpg",
"15.jpg",
"16.jpg"
];

let current=0;

setInterval(()=>{

    current++;

    if(current>=photos.length){
        current=0;
    }

    const slide=document.getElementById("slide");

    if(slide){
        slide.src=photos[current];
    }

},3000);
