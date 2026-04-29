import { getRandomQuote, renderQuote } from "./features/features.js";

const BTN_QUOTE = document.getElementById("btn-quote");
setTimeout(renderQuote, 1500);

BTN_QUOTE.addEventListener("click", getRandomQuote);
