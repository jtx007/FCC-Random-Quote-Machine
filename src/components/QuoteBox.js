import React from "react";

const QuoteBox = ({ quote, author, fetchRandomQuote }) => {
  return (
    <div id="quote-box">
      <section id="text">
        <h1>"{quote}"</h1>
        <span id="author">- {author}</span>
      </section>
      <div id="button-container">
        <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">
          <button id="share-to-twitter-button">Tweet Quote</button>
        </a>
        <button onClick={() => fetchRandomQuote()} id="new-quote">New Quote</button>
      </div>
    </div>
  );
};

export default QuoteBox;
