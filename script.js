function startWebsite() {

    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;
        music.play().catch(() => {});
    }

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

// Floating Hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 300);

// Stars

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 2 + "s";

    document.getElementById("stars").appendChild(star);

}

// Confetti

function confetti() {

    const c = document.createElement("div");

    c.innerHTML = "🎊";

    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";
    c.style.fontSize = "30px";
    c.style.transition = "4s linear";

    document.body.appendChild(c);

    setTimeout(() => {
        c.style.top = "110vh";
    }, 50);

    setTimeout(() => {
        c.remove();
    }, 4500);

}

setInterval(confetti, 400);

// Slideshow

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
"file_000000008bc071f5a828a2012647a923.png",
"11.jpg.png",
"12.jpg.png",
"13.jpg.png",
"file_0000000003447207886866ec4a13f04b.png",
"15.jpg.png",
"16.jpg.png"

];

let current = 0;

setInterval(() => {

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    document.getElementById("slide").src = photos[current];

}, 3000);

// Bengali Letter

function showLetter() {

    document.getElementById("hiddenLetter").style.display = "block";

    document.getElementById("heartBtn").style.display = "none";

    document.getElementById("hiddenLetter").scrollIntoView({
        behavior: "smooth"
    });

}

// Gift

function openGift() {

    document.querySelector(".gift-box").innerHTML = "💖";

    document.getElementById("giftMessage").style.display = "block";

    document.getElementById("giftMessage").scrollIntoView({
        behavior: "smooth"
    });

}

// Proposal

let noCount = 0;

function yesAnswer() {

    document.getElementById("proposalReply").style.display = "block";

    document.getElementById("proposalReply").innerHTML =
    "🥹❤️ Yaaay!! You made me the happiest person in the world! ❤️";

    document.getElementById("proposalVideo").style.display = "block";
const video = document.querySelector("#proposalVideo video");
video.load();
    document.getElementById("proposalVideo").scrollIntoView({
        behavior: "smooth"
    });

}

function noAnswer(event) {

    noCount++;

    const noBtn = document.getElementById("noBtn");

    const x = Math.random() * (window.innerWidth - 120);

    const y = Math.random() * (window.innerHeight - 70);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if (noCount >= 5) {

        document.getElementById("proposalReply").style.display = "block";

        document.getElementById("proposalReply").innerHTML =
        "😏 Okay accepted... But my heart will always wait for you. ❤️";

        noBtn.style.display = "none";
    }

}
