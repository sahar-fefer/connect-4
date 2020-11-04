import React from 'react';
import Cell from './cell';

const Game = require("../moduls/game");

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new Game(this.props.data.numOfPlayers, this.props.data.player1Name, this.props.data.player1color, this.props.data.player2Name, this.props.data.player2color, this.props.data.col, this.props.data.rows, this.props.data.theBestOf),
            test: null,
            board: null,
            loading: true,
            justForRender: "",
        };
    }

    initGame = () => {
        this.state.game.setPlayers();
        this.state.game.setBoard(this.props.data.col, this.props.data.rows);
        console.log(this.state.game);
        this.setState({
            loading: false
        })
    };

    initboard() {
        return this.state.game.board.board.map((row, rowIndex) => {
            return (
                <div className="rows">
                    {row.map((col, colIndex) => <Cell colsNum={this.props.data.col} row={rowIndex} col={colIndex} color={col}
                        playof={this.playof} currentPlayer={this.state.game.currentPlayer}
                    />)}
                </div>
            );
        });
    }

    changeColor = () => {
        this.setState({
            justForRender: "h"
        })
    };

    playof = (col) => {
        this.state.game.playMove(col, this.changeColor);
        console.log(this.state.game.board.board);
    };

    // handleHover = (col) => {
    //     const freeCel = this.state.game.board.checkCell(col);
    //     if (freeCel) {
    //         this.state.game.currentPlayer.color
    //     }
    // }

    colorOfPlayer = (player) => {
        if (player == "player1") {
            return this.props.data.player1color
        } else if (player == "player2") {
            return this.props.data.player2color
        }
    };

    undoLastMove = () => {
        this.state.game.board.undo();
        this.state.game.swapPlayer();
        this.setState({
            justForRender: "h"
        })
    }

    isThisCurPlayer = (namePlayer) => {
        if (this.state.game.currentPlayer.name === namePlayer) {
            return "2px solid white"
        } else {
            return "none"
        }
    }



    render() {
        return (
            <div>
                {this.state.loading ? this.initGame() :
                    <div className={"board"}>
                        {this.initboard()}
                    </div>
                }
                <div className="player1Side playerSide" style={{ border: this.isThisCurPlayer(this.props.data.player1Name) }}>
                    <div className="playerName" style={{ backgroundColor: this.colorOfPlayer("player1") }}>{this.props.data.player1Name}</div>
                    <div className="playerWins">Wins: {this.state.game.player1.wins}</div>
                </div>

                <div className="player2Side playerSide" style={{ border: this.isThisCurPlayer(this.props.data.player2Name) }}>
                    <div className="playerName" style={{ backgroundColor: this.colorOfPlayer("player2") }}>{this.props.data.player2Name}</div>
                    <div className="playerWins">Wins: {this.state.game.player2.wins}</div>
                </div>

                <div className="undo" onClick={this.undoLastMove}>undo</div>
                {this.state.game.board.endGame &&
                    <div className="WrapperGameOver">
                        <div className="gameOver">
                            <h1 className="gameOverHeader">Game Over</h1>
                            <h2 className="gameOverText">{this.state.game.currentPlayer.name} win the tournament!</h2>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Table;