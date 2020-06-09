import React, {useEffect, useState} from 'react';
import QuoteBox from '../components/QuoteBox'
import '../styles/App.css'
const App = () => {

    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')

    useEffect(() => {
        fetchRandomQuote()
    }, [])

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch(
              "https://thesimpsonsquoteapi.glitch.me/quotes"
            );
            const data = await response.json()
            console.log(data)
            setAuthor(data[0].character);
            setQuote(data[0].quote);
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div className="quote-box-container">
        <h1 className="headline">Random Simpsons Quotes</h1>

        <QuoteBox author={author} quote={quote} fetchRandomQuote={fetchRandomQuote}/>
      </div>
    );
}

export default App;