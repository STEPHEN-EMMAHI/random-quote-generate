import { QUOTES } from "./data/quotes.js";
import { STATE } from "./state/state.js";
import { getRandomQuote, renderQuote } from "./features/features.js";

const BTN_QUOTE = document.getElementById("btn-quote");
renderQuote();

BTN_QUOTE.addEventListener("click", getRandomQuote);
