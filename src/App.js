import React from "react";
//import "./App.css";
import Header from "./components/Header";
import QuotesBox from "./components/QuotesBox";
import Button from "./components/Button";
import TwitterShare from "./components/TwitterShare";
//import Jumbotron from "react-bootstrap/Jumbotron";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(re => {
        let data = re.quotes;
        let quoteIndex = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteIndex];
        this.setState({
          quote: randomQuote["quote"],
          author: randomQuote["author"]
        });
      });
  }
  handleClick() {
    this.getQuote();
  }

  render() {
    const { quote, author } = this.state;

    return (
      <div
        className="wrapper d-flex align-items-center justify-content-center"
        id="wrapper"
      >
        <div className="col-6 box p-4 rounded" id="quote-box">
          <Header title="Quotes" />
          <QuotesBox quote={quote} author={author} />

          <div
            className="d-flex justify-content-between text-dark"
            id="buttons"
          >
            <TwitterShare quote={quote} author={author} />
            <Button nameButton={"New Quote"} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
