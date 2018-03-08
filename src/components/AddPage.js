import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddPage extends Component {
    state = {
        first_name: '',
        email: ''
    }

    handleAddPerson = (e) => {
        e.preventDefault();

        const { first_name, email } = this.state;

        this.props.addPerson({
            first_name,
            email,
            id: Math.random().toString()
        });

        this.props.history.push('/');
    }

    updateFirstName = (e) => {
        this.setState({
            first_name: e.target.value
        });
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Add Page</h1>
                <form onSubmit={this.handleAddPerson}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" onChange={this.updateFirstName} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" onChange={this.updateEmail} />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default withRouter(AddPage);