// import getRandomQuote & renderQuote function
import {
  getRandomQuote,
  renderQuote,
  saveCurrentQuote,
  showAllQuotes,
  filterByCategory,
  showToast,
  showAllFavQuotes,
  clearAllQuotes,
  clearAllFavorites,
} from "./features/features.js";

import { STATE } from "./state/state.js";

// ==> render the random quote
setTimeout(renderQuote, 400);

// initialize a new flag
let flag = false;

/* ==> BTN GENERATE QUOTE */
// get btn quote id and click btn-quote to generate random quote
const BTN_QUOTE = document.getElementById("btn-quote");
BTN_QUOTE.addEventListener("click", () => {
  flag = false;
  getRandomQuote();
});

/* ==> FILTER CATEGORY */
// get the select container's ID (Event Delegation)
const SELECTION_CATEGORY = document.getElementById("category-select");
SELECTION_CATEGORY.addEventListener("change", (event) => {
  const SELECTED_CATEGORY = event.target.value;
  flag = true;
  filterByCategory(SELECTED_CATEGORY);
});

/* ==> BTN FAV-QUOTE & TOAST */
//get btn-fav id and click to add to fav
const BTN_FAV = document.getElementById("btn-fav");
BTN_FAV.addEventListener("click", () => {
  if (flag) return;
  showToast();
  saveCurrentQuote();
});

/* ==> CLEAR ALL QUOTES */
const CLEAR_ALL_QUOTES = document.getElementById("clear-all");
CLEAR_ALL_QUOTES.addEventListener("click", () => {
  if (flag) return;
  clearAllQuotes();
});

/* ==>  BTN SHOW ALL QUOTES */
// get the btn-all-quote id and click to show all quotes
const BTN_ALL_QUOTES = document.getElementById("btn-show-all");
BTN_ALL_QUOTES.addEventListener("click", showAllQuotes);

/* ==> SHOW ALL FAVORITE QUOTES */
// get the show-all-fav ID
const SHOW_ALL_QUOTES = document.getElementById("show-all-fav");
SHOW_ALL_QUOTES.addEventListener("click", showAllFavQuotes);

/* CLEAR ALL FAVORITE QUOTES */
const CLEAR_ALL_FAVORITES = document.getElementById("clear-all-fav");
CLEAR_ALL_FAVORITES.addEventListener("click", clearAllFavorites);
