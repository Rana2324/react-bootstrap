import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-02-09&sortBy=publishedAt&apiKey=aed91860d16b48408ed3b5b3828276c0"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {news.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {news.map((nw) => (
            <News news={nw}></News>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
