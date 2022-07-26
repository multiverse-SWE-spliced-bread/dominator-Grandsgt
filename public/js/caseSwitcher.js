
const btn1 = document.getElementById('quiet-btn');
const btn2 = document.getElementById('loud-btn');
const btn3 = document.getElementById('sarc-btn');
const allP = document.getElementsByTagName('p');
btn1.addEventListener('click', lowerCase);
btn2.addEventListener('click', upperCase);
btn3.addEventListener('click', sarcastic);

function lowerCase(e) {
    for (let p of allP) {
        let txt = p.innerText;
        txt = txt.toLowerCase();
        p.innerText = txt;
    }
}

function upperCase(e) {
    for (let p of allP) {
        let txt = p.innerText;
        txt = txt.toUpperCase();
        p.innerText = txt;
    }
}

function sarcastic(e){
    for (let p of allP) {
        let txt = p.innerText;
        txt = txt.toLowerCase();
        let ul = false;
        txt = txt.split('').map(letter => letter.match(/[a-zA-Z]/) != null ? (ul = ! ul, ul ? letter.toUpperCase() : letter.toLowerCase()) : letter).join('');
        p.innerText = txt;
    }
}