import React from 'react';
import { Link } from "react-router-dom";
import { FaPlay, FaUserNinja, FaUserSecret, FaUserAstronaut } from 'react-icons/fa';

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

    setNumOfPlayers = (numOfPlayers) => {
        this.setState({
            'numOfPlayers': numOfPlayers
        });
        this.props.changeToTable('numOfPlayers', numOfPlayers)
    }

    setBoardSize = (col, rows) => {
        this.setState({
            'col': col,
            'rows': rows
        });
        this.props.changeToTable('col', col);
        this.props.changeToTable('rows', rows);
    };

    render() {
        return (
            <div className="home">
                <div className="wrapper">
                    <h1 className="header">Welcome To 4 In A Row!</h1>
                    <div className='row square_wrapper'>
                        <button className="square buttons_square player_square" onClick={() => this.setNumOfPlayers(1)}>
                            <FaUserAstronaut onClick={() => this.setNumOfPlayers(1)} />
                        </button>
                        <button className="square buttons_square two_players_square" onClick={() => this.setNumOfPlayers(2)}>
                            <FaUserNinja onClick={() => this.setNumOfPlayers(2)} />
                            <FaUserSecret onClick={() => this.setNumOfPlayers(2)} />
                        </button>
                    </div>
                    <div className='row square_wrapper'>
                        <button className="square buttons_square board_square" onClick={() => this.setBoardSize(5, 6)}>
                            5X6
                        </button>
                        <button className="square buttons_square board_square" onClick={() => this.setBoardSize(6, 7)}>
                            6X7
                        </button>
                        <button className="square buttons_square board_square" onClick={() => this.setBoardSize(7, 8)}>
                            7X8
                        </button>
                    </div>
                    <Link className="play square" to="/tabel"><FaPlay /></Link>
                </div>
            </div>
        )
    }
}

export default Home;