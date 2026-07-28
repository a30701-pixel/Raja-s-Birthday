/* =========================
HAPPY BIRTHDAY RAJA ❤️
FINAL SCRIPT
========================= */


/* =========================
START WEBSITE
========================= */


function startWebsite(){

    let welcome = document.getElementById("welcome");
    let main = document.getElementById("main");


    welcome.style.display="none";


    main.style.display="block";


    setTimeout(()=>{

        main.style.opacity="1";

    },100);



    let music=document.getElementById("bgMusic");


    if(music){

        music.play().catch(()=>{});

    }



    createStars();

    createHearts();

    createPetals();

}





/* =========================
PHOTO SLIDESHOW
========================= */


let photos=[

"jpg.png/1.jpg",
"jpg.png/2.jpg",
"jpg.png/3.jpg",
"jpg.png/4.jpg",
"jpg.png/5.jpg",
"jpg.png/6.jpg",
"jpg.png/7.jpg",
"jpg.png/8.jpg",
"jpg.png/9.jpg",
"jpg.png/10.jpg",
"jpg.png/11.jpg",
"jpg.png/12.jpg",
"jpg.png/13.jpg",
"jpg.png/14.jpg",
"jpg.png/15.jpg",
"jpg.png/16.jpg"

];


let photoIndex=0;



function changePhoto(id){


    let image=document.getElementById(id);


    if(image){


        photoIndex++;


        if(photoIndex>=photos.length){

            photoIndex=0;

        }



        image.style.opacity="0";



        setTimeout(()=>{


            image.src=photos[photoIndex];


            image.style.opacity="1";



        },500);



    }


}




setInterval(()=>{

    changePhoto("slide");

},4000);




setInterval(()=>{

    changePhoto("memorySlide");

},3500);








/* =========================
MEMORY BUTTON
========================= */


function showMemories(){


    document.getElementById("memorySection").style.display="block";


}








/* =========================
LOVE LETTER
========================= */


function showLetter(){


    let letter=document.getElementById("hiddenLetter");



    if(letter.style.display==="block"){


        letter.style.display="none";


    }

    else{


        letter.style.display="block";


    }


}








/* =========================
GIFT
========================= */


function openGift(){


    document.getElementById("giftMessage").style.display="block";


}








/* =========================
PROPOSAL
========================= */


function yesAnswer(){


    let reply=document.getElementById("proposalReply");


    reply.style.display="block";



    reply.innerHTML=

    "❤️ You just made my heart the happiest. Forever starts with us. 💍";



    document.getElementById("proposalVideo").style.display="block";


    document.getElementById("rings").style.display="block";


    document.getElementById("ringMessage").style.display="block";



    createFireworks();



}




function noAnswer(){


    let reply=document.getElementById("proposalReply");


    reply.style.display="block";



    reply.innerHTML=

    "🥺 Think again Raja... My heart already chooses you ❤️";


}








/* =========================
REPLAY
========================= */


function replayStory(){


    location.reload();


}








/* =========================
STARS
========================= */


function createStars(){


    let box=document.getElementById("stars");



    for(let i=0;i<80;i++){


        let star=document.createElement("div");


        star.className="star";



        star.style.left=Math.random()*100+"%";


        star.style.top=Math.random()*100+"%";



        star.style.animationDelay=Math.random()*3+"s";



        box.appendChild(star);



    }


}








/* =========================
FLOATING HEARTS
========================= */


function createHearts(){


    let box=document.getElementById("hearts");



    setInterval(()=>{


        let heart=document.createElement("div");



        heart.className="heart";


        heart.innerHTML="❤️";



        heart.style.left=Math.random()*100+"%";



        heart.style.animationDuration=

        (4+Math.random()*4)+"s";



        box.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },8000);



    },600);



}








/* =========================
ROSE PETALS
========================= */


function createPetals(){


    let box=document.getElementById("rosePetals");



    setInterval(()=>{


        let petal=document.createElement("div");


        petal.className="petal";


        petal.innerHTML="🌹";



        petal.style.left=Math.random()*100+"%";



        petal.style.animationDuration=

        (5+Math.random()*5)+"s";



        box.appendChild(petal);



        setTimeout(()=>{


            petal.remove();


        },10000);



    },800);



}








/* =========================
FIREWORKS
========================= */


function createFireworks(){


    let box=document.getElementById("fireworks");



    for(let i=0;i<20;i++){


        let fire=document.createElement("div");


        fire.className="firework";


        fire.innerHTML="✨";



        fire.style.left=Math.random()*100+"%";


        fire.style.top=Math.random()*100+"%";



        box.appendChild(fire);



        setTimeout(()=>{


            fire.remove();


        },1500);



    }


}








/* =========================
ENDING SCREEN
========================= */


window.addEventListener("scroll",()=>{


    let final=document.getElementById("finalMessage");

    let end=document.getElementById("endingScreen");



    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200){



        final.style.display="block";



        setTimeout(()=>{


            end.classList.add("show");


        },5000);



    }



});
