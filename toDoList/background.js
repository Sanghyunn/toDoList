const body = document.querySelector("body");

const IMG_NUMBER = 5;

function showImage(imgNum){
    const image = new Image;
    image.src = `./Images/${imgNum}.png`;
    image.classList.add("bgImage");
    body.appendChild(image);


}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function Init(){
    const randomNumber = genRandom();
    showImage(randomNumber);
}
Init();