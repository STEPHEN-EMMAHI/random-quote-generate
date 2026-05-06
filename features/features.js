/* GENERATE QUOTE FEATURE */
import { QUOTES } from "../data/quotes.js";
import { STATE } from "../state/state.js";

const BTN_FAV = document.getElementById("btn-fav");
const TEXT = document.getElementById("quote");
const AUTHOR = document.getElementById("author");

/* function to get random quote */
export function getRandomQuote() {
  const TOTAL = STATE.allQuotes.length;
  const RANDOM_INDEX = Math.floor(Math.random() * TOTAL);

  // update state
  STATE.currentQuote = STATE.allQuotes[RANDOM_INDEX];
  renderQuote();
}

/* function to show quote on screen */
export function renderQuote() {
  TEXT.textContent = `"${STATE.currentQuote.text}"`;
  AUTHOR.textContent = `author: ${STATE.currentQuote.author}`;
}

/* ADD TO FAV QUOTE FEATURE */
export function saveCurrentQuote() {
  const CURRENTQUOTE = STATE.currentQuote;

  if (!CURRENTQUOTE) return;

  const EXISTS = STATE.favorite.some((quote) => quote.id === CURRENTQUOTE.id);

  if (!EXISTS) {
    STATE.favorite.push(CURRENTQUOTE);
    console.log("Added:", CURRENTQUOTE);
  } else {
    console.log("Already exists");
  }
}
