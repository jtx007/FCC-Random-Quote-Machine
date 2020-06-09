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
              "http://quotes.stormconsultancy.co.uk/random.json"
            );
            const data = await response.json()
            setAuthor(data.author);
            setQuote(data.quote);
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <div className="quote-box-container">
        <h1 className="headline">Random Tech Quotes</h1>

        <QuoteBox author={author} quote={quote} fetchRandomQuote={fetchRandomQuote}/>
      </div>
    );
}

export default App;