import React from 'react';
import { Link } from "react-router-dom";
import { FaPlay, FaUserNinja } from 'react-icons/fa';

class Home extends React.Component {
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
            <div className="home">
                <div className="wrapper">
                    <h1 className="header">Welcome To 4 In A Row!</h1>
                    <div className='row square_wrapper'>
                        <button className="square square_buttons">
                            <FaUserNinja />
                        </button>
                        <button className="square square_buttons">
                            <FaUserNinja />
                        </button>
                    </div>
                    <Link className="play square" to="/tabel"><FaPlay /></Link>
                </div>
            </div>
        )
    }
}

export default Home;