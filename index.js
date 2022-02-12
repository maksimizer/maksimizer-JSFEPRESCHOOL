const langBtns = document.querySelectorAll('.lang-button');
const quote = document.querySelector('.quote');
const author = document. querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote-button')
const en = document.querySelector('.en');
const by = document.querySelector('.by');
let currentLang = "en";

//randomise img
function randomiseImg() {
    document.querySelector('.main-img').style.backgroundImage = `url(./assets/img/${Math.ceil(Math.random() * 14)}.png)`;
}

randomiseImg();

// get data from API
const url = 'https://type.fit/api/quotes';
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    randomiseDataEn(data);
}
  getData();

//show random quote in en

function randomiseDataEn(data) {
    let randomEn = Math.ceil(Math.random() * data.length);
    quote.textContent = '"' + data[randomEn].text + '"';
    author.textContent = '© ' + data[randomEn].author + ' (not JSON Statham!)';
};

//change quote
newQuoteBtn.addEventListener('click', (event) => {
    if (currentLang == "en") {
        getData();
    } else {
        getQuotes();
    };
    randomiseImg();
})


//activate lang button
langBtns.forEach(element => {
    element.addEventListener('click', activateBtn);
});

function activateBtn(event) {
    langBtns.forEach(element => {
        element.classList.remove('active');
     });
     event.target.classList.add('active');
};

//change lang 
en.addEventListener('click', (event) => {
    currentLang = 'en';
    randomiseImg();
    getData();
    newQuoteBtn.textContent = "New cool quote!"
});

by.addEventListener('click', (event) => {
    currentLang = 'by';
    randomiseImg();
    getQuotes();
    newQuoteBtn.textContent = "Пацанская цытата!"
});

// by qoutes

async function getQuotes() {
    const quotes = "./data.json";
    const res = await fetch(quotes);
    const data = await res.json();
    showDataBy(data);
  }
  
  function showDataBy(data) {
        let randomBy = Math.ceil(Math.random() * data.length);
        quote.textContent = '"' + data[randomBy].text + '"';
        author.textContent = '© ' + data[randomBy].author + ' (не Джэйсан Стэйтам!)';
};

console.log(`Привет! Самооценка на 70/60. Вроде все выполнил, ничего не забыл. Надеюсь мы сойдемсяво мнении. Спасибо и удачи тебе! \n
Вёрстка +10\n
    на странице есть цитата и кнопка для смены цитаты +5\n
    в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n
При загрузке страницы приложения отображается рандомная цитата +10\n
При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n
Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n
Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10\n
Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10\n
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n
    высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо`)
