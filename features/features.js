import { STATE } from "../state/state.js";

/* ==> SELECTING ELEMENTS */

const BTN_FAV = document.getElementById("btn-fav");
const TEXT = document.getElementById("quote");
const AUTHOR = document.getElementById("author");
const DIV_DISPLAY_QUOTE = document.getElementById(
  "main__quotes-display-container",
);
const BTN_ALL_QUOTES = document.getElementById("all-quotes-container");
// toast container ID
const TOAST_CONTAINER = document.getElementById("toast-container");

/* ==> GET RANDOM QUOTE FUNCTION */

/* function to get random quote */
export function getRandomQuote() {
  const TOTAL = STATE.allQuotes.length;
  const RANDOM_INDEX = Math.floor(Math.random() * TOTAL);

  // update state
  STATE.currentQuote = STATE.allQuotes[RANDOM_INDEX];
  renderQuote();
  BTN_ALL_QUOTES.innerHTML = "";
}

/* RENDER QUOTE ON SCREEN */

/* function to show quote on screen */
export function renderQuote() {
  DIV_DISPLAY_QUOTE.classList.add("container");
  TEXT.textContent = `"${STATE.currentQuote.text}"`;
  AUTHOR.textContent = `author: ${STATE.currentQuote.author}`;
}

/* ==> ADD TO FAV QUOTE FEATURE */

export function saveCurrentQuote() {
  // get the current quote
  const CURRENTQUOTE = STATE.currentQuote;

  // if it is not the current quote, return
  if (!CURRENTQUOTE) return;

  const EXISTS = STATE.favorite.some((quote) => quote.id === CURRENTQUOTE.id);

  if (!EXISTS) {
    STATE.favorite.push(CURRENTQUOTE);
    console.log("Added:", CURRENTQUOTE);
  } else {
    console.log("Already exists");
  }
}

/* ==> SHOW TOAST FUNCTION */
export function showToast() {
  // check if quote has already been added to favorites
  const IS_ALREADY_FAVORITE = STATE.favorite.some(
    (item) => STATE.currentQuote === item,
  );

  // if it's not STATE.current quote don't trigger a toast
  /* if (!STATE.currentQuote) return; */

  // if quote is already in fav array, don't trigger a toast
  if (IS_ALREADY_FAVORITE) return;

  // create the show toast element
  const TOAST = document.createElement("div");
  // create a class for the toast element
  TOAST.className = "toast";
  // create an element inside the toast element
  TOAST.innerHTML =
    "<span class='toast-span'>Added successfully to favorites✅</span>";
  // append the element created to the html element
  TOAST_CONTAINER.appendChild(TOAST);

  // small timeout to trigger CSS transition
  setTimeout(() => {
    TOAST.classList.add("show");
  });

  // slide out and remove after 3 seconds
  setTimeout(() => {
    TOAST.classList.remove("show");
    setTimeout(() => {
      TOAST.remove();
    }, 100);
  }, 2000);
}

/* ==> SHOW ALL QUOTES FEATURE */

// show all quotes function
export function showAllQuotes() {
  // hide random quote
  TEXT.textContent = "";
  AUTHOR.textContent = "";
  DIV_DISPLAY_QUOTE.classList.remove("container");

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

/* ==> FILTER BY CATEGORY */
export function filterByCategory(category) {
  const FILTERED = STATE.allQuotes.filter(
    (quote) => quote.category === category,
  );

  // when clicked remove the contents of the quote and its container
  TEXT.textContent = "";
  AUTHOR.textContent = "";
  DIV_DISPLAY_QUOTE.classList.remove("container");

  // mapping html ELEMENTS
  const DISPLAY_FILTERED = FILTERED.map((quotes) => {
    return `<div class="filtered-quotes-container">
    <p>"${quotes.text}"</p>
    <p>author: ${quotes.author}</p>
    </div>`;
  }).join("");
  BTN_ALL_QUOTES.innerHTML = DISPLAY_FILTERED;
}

/* ==> FUNCTION TO SHOW ALL FAVORITE QUOTES */
export function showAllFavQuotes() {
  // when clicked remove the contents of the quote and its container
  TEXT.textContent = "";
  AUTHOR.textContent = "";
  DIV_DISPLAY_QUOTE.classList.remove("container");

  // get favorite quote and map to html elements
  const FAV_QUOTE = STATE.favorite
    .map((favQuote) => {
      return `<div class="show-quotes-container">
    <p>"${favQuote.text}"</p>
    <p>${favQuote.author}</p>
    </div>`;
    })
    .join("");

  BTN_ALL_QUOTES.innerHTML = FAV_QUOTE;

  if (STATE.favorite.length === 0) {
    setTimeout(renderQuote, 300);
  }
}

/* ==> CLEAR ALL FAVORITES FUNCTION */
export function clearAllQuotes() {
  // when clicked assign allquotes to an empty string
  BTN_ALL_QUOTES.innerHTML = "";

  // also empty the array upon clearing everything
  STATE.favorite = [];

  setTimeout(renderQuote, 400);
}

export function clearAllFavorites() {
  // empty the array and print it out
  STATE.favorite = [];
  console.log(STATE.favorite.length);
  BTN_ALL_QUOTES.innerHTML = "";

  setTimeout(renderQuote, 400);
}
