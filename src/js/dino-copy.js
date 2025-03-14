const dino = document.querySelector(".dinos");
const cactus = document.querySelector(".cactus") ;

document.addEventListener("keydown", function(event){
    if (event.code === 'Enter') {
        jump();
    }
    event.preventDefault;
})



function jump() {
    if (dino.classList != "jump") {
      dino.classList.add("jump");
  
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 300);
    }
  }


let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    
    }
}, 10)

document.addEventListener("keydown", function (event) {
    jump();
  });
