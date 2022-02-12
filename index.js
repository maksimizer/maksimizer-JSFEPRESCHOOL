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
    randomiseImg();
    getData();
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

//change lang to En
en.addEventListener('click', (event) => {
    currentLang = 'en';
    randomiseImg();
    getData();
    newQuoteBtn.textContent = "New cool quote!"
});


//change lang to By
by.addEventListener('click', (event) => {
    currentLang = 'by';
    randomiseImg();
    newQuoteBtn.textContent = "Пацанская цытата!"
})