let isPlay = false;

const audio = new Audio();
let currentAudio = './assets/audio/forest.mp3';
const playButton = document.querySelector('.play-button');

//  play/pause by clicking play button
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


// highlite active bird
const birds = document.querySelectorAll('.nav-item');
birds.forEach(element => {
    element.addEventListener('click', changeBirdActive)});

function changeBirdActive(event) {
    birds.forEach(element => {
        element.classList.remove('active')
    });
    event.target.classList.add('active');
};

// change background image and audio by clicking bird namegit
const main = document.querySelector('.main');

birds.forEach(element => {
    element.addEventListener('click', changeBird)
});

function changeBird(event) {
    const dataSet = event.target.dataset.bird;
    main.style.backgroundImage = `url(./assets/img/${dataSet}.jpg)`;
    currentAudio = `./assets/audio/${dataSet}.mp3`;
    if (isPlay ==true) {
        audio.src = currentAudio;
        audio.currentTime = 0;
        audio.play();
    }
};

console.log(`Привет, друг/подруга! Претендую на максимальный балл (70). Надеюсь мы сойдемся во мнении. Я немного улучшил функционал по сравнению с демо.\n
Теперь, если не нажата кнопка play, при переключении междку птицами, музыка не начинает внезапно проигрываться автоматоматически.\n
Но если кнопка play была нажата и звук проигрывался, то при смене птицы, он продолжит воспроизводиться, изменившись на выбранную птицу.\n
Считаю, что так будет правильнее, юзер должне определять когда ему слушать, а когда нет.\n 
Вёрстка +10:\n
При кликах по интерактивным элементам меняется изображение +10\n
При кликах по интерактивным элементам меняется звук +10\n
Активный в данный момент интерактивный элемент выделяется стилем +10\n
Кнопка Play/Pause +20:\n
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n`)