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
            <input type="text" value={this.state.term} onChange={this.handleChange} />
        )
    }
}

export default SearchBar;