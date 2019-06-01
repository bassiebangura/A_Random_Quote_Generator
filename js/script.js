/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
let varInterval;

//create array to hold quotes
let quotes = [
  {
    quote:
      "Nothing can stop a will that will stake even its existence to the extent of his purpose",
    source: "Benjamin Isareli",
    tags: "Motivation"
  },
  {
    quote: "I can do all things through Christ who strengthens me.",
    source: "Bible",
    citation: "Philians 4:12",
    year: "AD 62"
  },
  {
    quote: "You teach what you know but you produce who you are.",
    source: "Bishop J.C. Harsh",
    citation: "Sunday Sermon",
    year: "2015",
    tags: "Life Essential"
  },
  {
    quote: "Luck is when oportunity meets preparedness.",
    source: "Shannon Sharp",
    citation: "Undisputed",
    year: "2019"
  },
  {
    quote: "I will never leave you not forsake, says the Lord Almight.",
    source: "Bible",
    citation: "Hebrews 5:8"
  }
];

const getRandomQuote = () => {
  //function generates random number and use that number
  //to select a quote from 'quotes' array and return it
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

const printQuote = () => {
  //function manipulates DOM to render quote
  //calling fn getRandomQuote which returns,
  //quote to be render on webpage.
  let quoteContainer = document.getElementById("quote-box");
  let pageContainer = document.querySelector("body");
  let innerHTMLContent = "";
  let randomQuote = getRandomQuote();

  console.log(randomQuote.citation);
  innerHTMLContent += '<p class="quote">' + randomQuote.quote + "</p>";
  if (randomQuote.source) {
    innerHTMLContent += '<p class="source">' + randomQuote.source;
  }
  if (randomQuote.citation) {
    innerHTMLContent +=
      '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    innerHTMLContent += '<span class="year">' + randomQuote.year + "</span>";
  }
  if (randomQuote.tags) {
    innerHTMLContent += '<span class="tags">' + randomQuote.tags + "</span>";
  }

  innerHTMLContent += "</p>";

  quoteContainer.innerHTML = innerHTMLContent;
  pageContainer.style.backgroundColor =
    pageContainer.style.backgroundColor == "green" ? "blue" : "green";
};

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

//Automatically switch quote after 10s and returns interval ID to clear setInterval
varInterval = setInterval(printQuote, 20000);
