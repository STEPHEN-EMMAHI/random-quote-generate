// import getRandomQuote & renderQuote function
import {
  getRandomQuote,
  renderQuote,
  saveCurrentQuote,
} from "./features/features.js";

// get btn quote
const BTN_QUOTE = document.getElementById("btn-quote");

// render the random quote
setTimeout(renderQuote, 1500);

// click btn-quote to generate random quote
BTN_QUOTE.addEventListener("click", getRandomQuote);

//get btn-fav
const BTN_FAV = document.getElementById("btn-fav");
BTN_FAV.addEventListener("click", saveCurrentQuotet);
