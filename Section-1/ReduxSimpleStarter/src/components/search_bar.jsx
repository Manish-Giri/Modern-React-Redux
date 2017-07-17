import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {term: ""};
    }
    handleChange = event => {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    render() {
        return (
            <div className="search-bar">
            <input type="text" value={this.state.term} onChange={this.handleChange} />            
            </div>
        )
    }
}

export default SearchBar;
