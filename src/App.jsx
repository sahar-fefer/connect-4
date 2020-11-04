import React from "react";
// import Welcome from "./components/welcome";
import Home from "./components/home";

import Table from './components/table';
import "../src/css/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: undefined,
            col: undefined,
            player1Name: undefined,
            player1color: undefined,
            player2Name: undefined,
            player2color: undefined,
            numOfPlayers: undefined,
            theBestOf: 1,
            game: undefined
        };
    }
    changeToTable = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        console.log("numOfPlayers", this.state.numOfPlayers)
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path="/tabel">
                            <Table data={this.state} />
                            <Link className="link linkToWelcome input" to="/">Back To Welcome Page</Link>
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
