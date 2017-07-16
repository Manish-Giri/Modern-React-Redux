import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './api_key';
let searchTerm = "apple";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      console.log(data);
      this.setState({ videos: data, selectedVideo: data[0] });
    })

    // this.handleVideoSelect = this.handleVideoSelect.bind(this);
  }

  handleVideoSelect = userVideo => {
    this.setState({ selectedVideo: userVideo });
  }

  render() {
    return (
    <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />  
        <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect}/>
    </div>
    )
  }
}

ReactDOM.render(
  <App/>
  , document.querySelector('.container'));
