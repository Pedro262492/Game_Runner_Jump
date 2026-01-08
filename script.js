
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".cano");


const jump = () => {
mario.classList.add("jump");

setTimeout(() => {

    mario.classList.remove("jump");


},500);

}

const loop = setInterval(() => {

    console.log("loop")

const pipePosition = pipe.offsetLeft;
const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);



if (pipePosition <= 36 && pipePosition > 0 && marioPosition < 70){

    pipe.style.animation = 'none'; 
pipe.style.left = pipePosition + "px";

  mario.style.animation = 'none'; 
mario.style.bottom = marioPosition + "px";

mario.src = "mario_gameover_sprite.png"
mario.style.width = "75px"

clearInterval(loop);

}

}, 10)

document.addEventListener("keydown", jump);


