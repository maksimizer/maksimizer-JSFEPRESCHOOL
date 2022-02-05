let isPlay = false;

const audio = new Audio();
let currentAudio = './assets/audio/forest.mp3';
const playButton = document.querySelector('.play-button');
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



