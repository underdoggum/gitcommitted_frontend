import { useState, useEffect } from "react";


const MotivationalQuotes = props => {

  const h3 = {
    fontStyle: "italic"
  }

  // Motivational quotes API
  const quoteUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  
  // State
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Fetch quotes
  const getRandomQuote = async () => {
    const response = await fetch(quoteUrl);
    const data = await response.json();
    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  useEffect(() => {
    getRandomQuote();
  }, [])
  

  return (
    <div>
      <h1>"{quote}"</h1>
      <h3 style={h3}> - {author}</h3>
    </div>
  )
}


export default MotivationalQuotes;
