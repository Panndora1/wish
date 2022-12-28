const nameBtn = document.querySelector('.form_btn');
const input = document.querySelector('.form_input');

let valueName;

const nameWr = document.querySelector('.wrapper');
const wish = document.querySelector('.wish');

const wishText = document.querySelector('.wish_text');
const closeBtn = document.querySelector('.close_img');
const wishBtn = document.querySelector('.wish_btn');

function visableName() {
    nameWr.classList.add('active');
    nameWr.classList.remove('none');
    wish.classList.add('none');
    wish.classList.remove('active');
}

function visableWish() {
    nameWr.classList.remove('active');
    nameWr.classList.add('none');
    wish.classList.remove('none');
    wish.classList.add('active');
}

const wishList = ['пусть все твои мечты сбываются!', 'пусть вселенная дает тебе все, что ты пожелаешь. Даже если ты не посылаешь запросы в космос',
'пусть солнышко тебе улыбается каждый деть', 'ты удивительный и прекрасный человек! Будь всегда таким!', 
'пусть твоя жизнь будет на столько счастливой, что даже лайф-коучеры тебе позавидуют',
'пусть каждый день будет такой же приятный, как и кошачьи лапки','пусть тебя не волнуют проблемы и невзгоды', 
'пусть тебя посещают только приятные и теплые мысли', 'пусть рядом с тобой будут только любящие и внимательные люди', 
'пусть твои глаза всегда светятся от счастья', 'пусть твоя улыбка всегда наполняет эту комнату', 'пусть самые смелые мечты сбываются', 
'пусть успех и удача всегда будут рядом с тобой'];

function randome(min, max) {
    let r = Math.random() * (max - min) + min;
    return Math.round(r)
}

function createWish(name) {
    let ranNum = randome(0, wishList.length-1);
    wishText.textContent = `${name}, ${wishList[ranNum]}`;
}

nameBtn.addEventListener('click', () => {
    valueName = input.value;
    visableWish();
    createWish(valueName)
});

closeBtn.addEventListener('click', () => {
    input.value = '';
    visableName();
})

wishBtn.addEventListener('click', () => {
    createWish(valueName);
})



