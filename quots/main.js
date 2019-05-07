const BASE_URL ='https://andruxnet-random-famous-quotes.p.mashape.com/cat='
const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
const quotes = [{
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    author: "The wizard of oz"
},
{
    quote:  "Blessed is the man who, having nothing to say, abstains from giving us wordy evidence of the fact.",
    author: "George Eliot"
},
{
    quote:  "А сегодня в завтрашний день не все могут смотреть. Вернее, смотреть могут не только лишь все. Мало, кто может это делать.",
    author: "Виталий Владимирович Кличко"
}];

const root = document.documentElement;

const quoteNode = document.getElementById("quote");
const authorNode = document.getElementById("author");
const nextNode = document.getElementById("next");

async function fetchQuote(){
    const options = {
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"
        }
    };

    const response = await fetch(BASE_URL, options);
    const data = await response.json();
    
    return data[0];
}


function getRandomItem (array) {
    return array[Math.floor(Math.random() * array.length)];
}

nextNode.addEventListener('click', async function() {
    quoteNode.classList.add("hidden")
    authorNode.classList.add("hidden")
    const { quote, author } = await fetchQuote(1);
    quoteNode.innerHTML = quote;
    authorNode.innerHTML = author;
    quoteNode.classList.remove("hidden")
    authorNode.classList.remove("hidden")

    root.style.setProperty('--primary-color', getRandomItem(colors))    
});

// https://codepen.io/hezag/pen/ZGxOLX
// sinyakov.com/frontend