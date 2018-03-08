import React, { Component } from 'react';
import App from './components/App';
import AddPage from './components/AddPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import data from './data.json';

class Main extends Component {
    state = {
        data: data.persons
    }

    handleAddPerson = (person) => {
        const { data } = this.state;

        data.push(person);

        this.setState({ data });
    }

    render() {
        const { data } = this.state;

        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (<App data={data} />)} />
                    <Route path="/add" render={() => (<AddPage addPerson={this.handleAddPerson} />)} />
                </Switch>
            </Router>
        )
    }
}

export default Main;