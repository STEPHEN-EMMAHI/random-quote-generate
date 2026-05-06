// import getRandomQuote & renderQuote function
import {
  getRandomQuote,
  renderQuote,
  saveCurrentQuote,
} from "./features/features.js";

import { showAllQuotes } from "./all-quotes/all-quotes.js";

// render the random quote
setTimeout(renderQuote, 1500);

/* BTN GENERATE QUOTE */
// get btn quote id and click btn-quote to generate random quote
const BTN_QUOTE = document.getElementById("btn-quote");
BTN_QUOTE.addEventListener("click", getRandomQuote);

/* BTN FAV-QUOTE */
//get btn-fav id and click to add to fav
const BTN_FAV = document.getElementById("btn-fav");
BTN_FAV.addEventListener("click", saveCurrentQuote);

/* BTN SHOW ALL QUOTES */
// get the btn-all-quote id and click to show all quotes
const BTN_ALL_QUOTES = document.getElementById("btn-show-all");
BTN_ALL_QUOTES.addEventListener("click", showAllQuotes);
