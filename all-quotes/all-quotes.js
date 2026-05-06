import { STATE } from "../state/state.js";

// get the all-quotes id and all-quotes-author
const BTN_ALL_QUOTES = document.getElementById("all-quotes-container");

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
}
