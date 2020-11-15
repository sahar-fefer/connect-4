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
            player1color: ['rgb(246,165,0)', 'linear-gradient(207deg, rgba(246,165,0,1) 10%, rgba(224,201,96,1) 39%, rgba(233,187,59,1) 92%)'],
            player2Name: 'player2',
            player2color: ['rgb(249,26,6)' ,'linear-gradient(207deg, rgba(249,26,6,1) 10%, rgba(237,96,67,1) 39%, rgba(230,35,18,1) 92%)'], 
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
                <div className="main" style={{
                    background: `url('/images/background_home.jpg')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                    width: '100vw'
                }}>
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
