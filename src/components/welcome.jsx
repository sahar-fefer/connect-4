import React from 'react';
import { Link } from "react-router-dom";

class Welcome extends React.Component {
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
            theBestOf: 1
        };
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        this.props.changeToTable(name, value)
    };

    chackIfPlayerOrComputer = () => {
        if (this.state.numOfPlayers == 1) {
            return (
                <div className="againstComputerMsg">Playing against the computer</div>
            )
        } else if (this.state.numOfPlayers == 2) {
            return (
                <div>
                    <header>Player 2</header>
                    Name: <input className="inputPlayer input" type="text"
                        name={"player2Name"} value={this.state.player2Name}
                        onChange={this.handleInputChange} />
                    Select your color: <input className="inputPlayer input" type="color"
                        name={"player2color"} value={this.state.player2color}
                        onChange={this.handleInputChange} />
                </div>
            )
        }
    }

    chackNumOfPlayers = () => {
        if (this.state.numOfPlayers) {
            return (
                < div >
                    <header>Player 1</header>
                    Name: <input className="inputPlayer input" type="text"
                        name={"player1Name"} value={this.state.player1Name}
                        onChange={this.handleInputChange} />
                    Select your color: <input className="inputPlayer input" type="color"
                        name={"player1color"} value={this.state.player1color}
                        onChange={this.handleInputChange} />
                </div >
            )
        }
    }

    render() {
        return (
            <div className="welcome">
                <div className="wrapper">
                    <h1 className="welcomeHeader">Welcome To 4 In A Row!</h1>
                    <form action="/action_page.php">
                        <div>
                            <label>Rows: </label>
                            <input className="inputSize input" type="number" name={"rows"} value={this.state.rows} onChange={this.handleInputChange} min="4" max="6" placeholder="0" />

                            <label>Cols: </label>
                            <input className="inputSize input" type="number" name={"col"} value={this.state.col} onChange={this.handleInputChange} min="4" max="8" placeholder="0" />
                        </div>

                        <br />


                        <div>
                            <label>Number of player: </label>
                            <input className="inputSize input" type="number" name={"numOfPlayers"} value={this.state.numOfPlayers} onChange={this.handleInputChange} min="1" max="2" placeholder="0" />
                        </div>
                        {this.chackNumOfPlayers()}
                        {this.chackIfPlayerOrComputer()}
                        
                        <br />

                        <div>
                            <label>The best of: </label>
                            <input className="inputSize input" type="number" name={"theBestOf"} value={this.state.theBestOf} onChange={this.handleInputChange} min="1" step="2" placeholder="1" />
                        </div>
                    </form>
                    <br />
                    {this.state.rows && this.state.col && this.state.numOfPlayers &&
                        <Link className="link linkToTable inputSize input" to="/tabel">Start</Link>
                    }
                </div>
            </div>
        )
    }
}

export default Welcome;