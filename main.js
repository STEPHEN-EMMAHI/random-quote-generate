// import getRandomQuote & renderQuote function
import {
  getRandomQuote,
  renderQuote,
  saveCurrentQuote,
  showAllQuotes,
  hideAllQuotes,
} from "./features/features.js";

// ==> render the random quote
setTimeout(renderQuote, 1500);

/* ==> BTN GENERATE QUOTE */
// get btn quote id and click btn-quote to generate random quote
const BTN_QUOTE = document.getElementById("btn-quote");
BTN_QUOTE.addEventListener("click", getRandomQuote);

/* ==> BTN FAV-QUOTE */
//get btn-fav id and click to add to fav
const BTN_FAV = document.getElementById("btn-fav");
BTN_FAV.addEventListener("click", saveCurrentQuote);

/* ==>  BTN SHOW ALL QUOTES */
// get the btn-all-quote id and click to show all quotes
const BTN_ALL_QUOTES = document.getElementById("btn-show-all");
BTN_ALL_QUOTES.addEventListener("click", showAllQuotes);

/* ==> HIDE ALL QUOTES */
// get the hide all quotes id and click to hide quotes
const BTN_HIDE_QUOTES = document.getElementById("hide-all-quotes");
BTN_HIDE_QUOTES.addEventListener("click", hideAllQuotes);
