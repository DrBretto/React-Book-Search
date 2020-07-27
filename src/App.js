import React from "react";
import MainHeader from "./components/MainHeader";
import BookType from "./components/BookType";
import SearchBar from "./components/SearchBar";
import PrintType from "./components/PrintType";
import Results from "./components/Results";

import "./App.css";

const api_key = "AIzaSyBTIj6EBRGZS_GSchB0KYkB8KsuLPwiKq0";
const BASEURL = "https://www.googleapis.com/books/v1";

export default class App extends React.Component {
  state = {
    api_key: "AIzaSyBTIj6EBRGZS_GSchB0KYkB8KsuLPwiKq0",
    BASEURL: "https://www.googleapis.com/books/v1",
  };

  render() {
    return (
      <div>
        <MainHeader />
        <nav>
          <SearchBar />
          <PrintType />
          <BookType />
        </nav>
        <main>
          <p>API key: {api_key}</p>
          <p>BASEURL: {BASEURL}</p>
          <Results />
        </main>
      </div>
    );
  }
}
