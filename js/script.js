/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Create the array of quote objects and name it `quotes`.
let quotes = [
  {
    quote: "quote 1",
    source: "quote1-src",
    citation: "quote1-cit",
    year: "quote1-year"
  },
  {
    quote: "quote 2",
    source: "quote2-src",
    citation: "quote2-cit",
    year: "quote2-year"
  },
  {
    quote: "quote 3",
    source: "quote3-src",
    citation: "quote3-cit",
    year: "quote3-year"
  }
];

// console.log(quotes[0].quote);

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * (quotes.length - 1));
  return quotes[randomNumber];
};

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let quoteContainer = document.getElementById("quote-box");
  let pageContainer = document.querySelector('body');
  let innerHTMLContent = "";
  innerHTMLContent +=
    '<p class="quote">' +
    randomQuote.quote +
    '</p><p class="source">' +
    randomQuote.source +
    '<span class="citation">' +
    randomQuote.citation +
    '</span><span class="year">' +
    randomQuote.year +
    "</span></p>";

  quoteContainer.innerHTML = innerHTMLContent;
  pageContainer.style.backgroundColor =
    pageContainer.style.backgroundColor == "green" ? "blue" : "green";
};
/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
