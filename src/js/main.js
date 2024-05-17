//basado en la Rotating Image Gallery de @masterneme https://codepen.io/masterneme/pen/bGzeOKX

const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;


function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout( () => {
        x -= 90;
        updateGallery();
    }, 2000)
}

updateGallery();