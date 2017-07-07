import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div  className="search-bar">
                <input
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} />
                
            </div>
        );

    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);

    }
}
export default SearchBar;