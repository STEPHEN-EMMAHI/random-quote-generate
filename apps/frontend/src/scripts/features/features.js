import { STATE } from "../state/state.js";

const BTN_QUOTE = document.getElementById("btn-quote");
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
