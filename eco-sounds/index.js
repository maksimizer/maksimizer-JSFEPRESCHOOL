let isPlay = false;

const audio = new Audio();
let currentAudio = './assets/audio/forest.mp3';
const playButton = document.querySelector('.play-button');

//  play/pause
playButton.addEventListener('click', playAudio);
function playAudio() {
    if (isPlay == false) {
        audio.src = currentAudio;
        audio.currentTime = 0;
        audio.play();
        playButton.classList.add('pause');
        isPlay = true;
    } else {
        playButton.classList.remove('pause');
        audio.pause();
        isPlay = false;
    };
};



const birds = document.querySelectorAll('.nav-item');
birds.forEach(element => {
    element.addEventListener('click', changeBirdActive)});

function changeBirdActive(event) {
    birds.forEach(element => {
        element.classList.remove('active')
    });
    event.target.classList.add('active');
};


const main = document.querySelector('.main');

birds.forEach(element => {
    element.addEventListener('click', changeBird)
});

function changeBird(event) {
    const dataSet = event.target.dataset.bird;
    main.style.backgroundImage = `url(./assets/img/${dataSet}.jpg)`;
    currentAudio = `./assets/audio/${dataSet}.mp3`;

};