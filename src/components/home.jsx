import React from 'react';
import { Link } from "react-router-dom";
import { FaPlay, FaUserNinja, FaUserSecret, FaUserAstronaut } from 'react-icons/fa';

class Home extends React.Component {
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
                <div className="wrapper container">
                    <h1 className="header">4 In A Row</h1>
                    <div className='row square_wrapper'>
                        <button className="square player_square col" onClick={() => this.setNumOfPlayers(1)}>
                            <FaUserAstronaut onClick={() => this.setNumOfPlayers(1)} />
                        </button>
                        <button className="square player_square col" onClick={() => this.setNumOfPlayers(2)}>
                            <FaUserNinja onClick={() => this.setNumOfPlayers(2)} />
                            <FaUserSecret onClick={() => this.setNumOfPlayers(2)} />
                        </button>
                    </div>
                    <div className='row square_wrapper'>
                        <button className="square board_square s col" onClick={() => this.setBoardSize(5, 5)}>
                            S
                        </button>
                        <button className="square board_square m col" onClick={() => this.setBoardSize(6, 5)}>
                            M
                        </button>
                        <button className="square board_square l col" onClick={() => this.setBoardSize(7, 5)}>
                            L
                        </button>
                    </div>
                    <div className="row">
                        <Link className="square play col" to="/tabel"><FaPlay /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;