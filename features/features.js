import { QUOTES } from "../data/quotes.js";
import { STATE } from "../state/state.js";

/* ==> GENERATE QUOTE FEATURE */

const BTN_FAV = document.getElementById("btn-fav");
const TEXT = document.getElementById("quote");
const AUTHOR = document.getElementById("author");
const DIV_DISPLAY_QUOTE = document.getElementById(
  "main__quotes-diaplay-container",
);
const BTN_ALL_QUOTES = document.getElementById("all-quotes-container");

/* function to get random quote */
export function getRandomQuote() {
  const TOTAL = STATE.allQuotes.length;
  const RANDOM_INDEX = Math.floor(Math.random() * TOTAL);

  // update state
  STATE.currentQuote = STATE.allQuotes[RANDOM_INDEX];
  renderQuote();
  hideAllQuotes();
}

/* function to show quote on screen */
export function renderQuote() {
  DIV_DISPLAY_QUOTE.classList.add("none");
  TEXT.textContent = `"${STATE.currentQuote.text}"`;
  AUTHOR.textContent = `author: ${STATE.currentQuote.author}`;
}

/* ==> ADD TO FAV QUOTE FEATURE */

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

/* ==> SHOW ALL QUOTES FEATURE */

// show all quotes function
export function showAllQuotes() {
  // mapping to HTML
  const ALL_QUOTES = STATE.allQuotes
    .map((quotes) => {
      return `<div class="quotes-card">
    <p>"${quotes.text}"</p>
    <p>author: ${quotes.author} </p>
    </div>`;
    })
    .join("");

  BTN_ALL_QUOTES.innerHTML = ALL_QUOTES;
  // hide random quote
  TEXT.textContent = "";
  AUTHOR.textContent = "";
  DIV_DISPLAY_QUOTE.classList.remove("none");
}

/* ==> HIDE ALL QUOTES FEATURE */
export function hideAllQuotes() {
  BTN_ALL_QUOTES.innerHTML = "";
  renderQuote();
}
