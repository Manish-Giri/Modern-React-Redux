import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import API_KEY from './api_key';
let searchTerm = "apple";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: []}

    YTSearch({key: API_KEY, term: searchTerm}, function(data) {
      console.log(data);
      this.setState({videos: data});
    })
  }

  render() {
    return (
    <div>
      <SearchBar/>
    </div>
    )
  }
}

ReactDOM.render(
  <App/>
  , document.querySelector('.container'));
