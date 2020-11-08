import React from "react";
import Home from "./components/home";
import PreTable from './components/preTable';
import Table from './components/table';
import "../src/css/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: undefined,
            col: undefined,
            player1Name: 'player1',
            player1color: '#8B008B',
            player2Name: 'player2',
            player2color: '#00CED1',
            numOfPlayers: undefined,
            theBestOf: 1,
            game: undefined
        };
    }
    changeToTable = (name, value) => {
        console.log('name, value', name, value);
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path="/table">
                            <Table data={this.state} />
                        </Route>
                        <Route path="/pre-table">
                            <PreTable changeToTable={this.changeToTable} />
                        </Route>
                        <Route path="/">
                            <Home changeToTable={this.changeToTable} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
