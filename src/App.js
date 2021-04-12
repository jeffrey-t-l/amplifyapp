import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7a890f36b0c14c63851fa03a0529b164'
  const [news, setNews] = useState(null)
  
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setNews(response.data.totalResults)
      })
    }, [url])

    if(news){
      return (<div><h1>OK:: {news}</h1></div>)
    }

    else {
      return(<div><h1>ERROR: NO DATA</h1></div>)
    }

}
export default App;
