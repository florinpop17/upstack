import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List';

class App extends Component {
    state = {
        searchTerm: ''
    }

    search = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render() {
        const { data } = this.props;
        const { searchTerm } = this.state;

        const filteredData = data.filter(x => x.first_name.toLowerCase().includes(searchTerm.toLowerCase()));

        return (
            <div>
                <h1>My list</h1>
                <input type="text" onChange={this.search} />
                <List data={filteredData} />
                <Link to={'/add'}>
                    <button>Add new person</button>
                </Link>
            </div>
        );
    }
}

export default App;
