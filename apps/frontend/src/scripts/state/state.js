import { QUOTES } from "../data/quotes.js";

const INITIAL_INDEX = Math.floor(Math.random() * QUOTES.length);

export const STATE = {
  allQuotes: QUOTES,
  currentQuote: QUOTES[INITIAL_INDEX],
  favorite: [],
};
