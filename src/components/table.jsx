import React from 'react';

import { Link } from 'react-router-dom';

import Cell from './cell';

import { AiOutlineUser } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { GoHome } from 'react-icons/go';
import { ImUndo2 } from 'react-icons/im';

const Game = require("../moduls/game");

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new Game(
                this.props.data.numOfPlayers,
                this.props.data.player1Name,
                this.props.data.player1color,
                this.props.data.player2Name,
                this.props.data.player2color,
                this.props.data.col,
                this.props.data.rows,
                this.props.data.theBestOf),
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
        if (player === "player1") {
            return this.props.data.player1color
            // backgroundColor: rgb(252,19,11) backgroundColor: linear-gradient(309deg, rgba(252,19,11,1) 0%, rgba(252,55,48,1) 24%, rgba(247,14,1,1) 100%);
        } else if (player === "player2") {
            return this.props.data.player2color
            // backgroundColor: rgb(19,118,240) backgroundColor: linear-gradient(309deg, rgba(19,118,240,1) 0%, rgba(55,143,240,1) 24%, rgba(11,118,241,1) 100%);
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
            return "2px solid transparent"
        }
    }



    render() {
        const { numOfPlayers } = this.state.game;
        const { colorOfPlayer } = this;
        console.log('num of players', numOfPlayers);
        return (
            <div>
                {this.state.loading ? this.initGame() :
                    <div className={'row table-wrapper'}>
                        <div className="player1_side player_side" style={{ border: this.isThisCurPlayer(this.props.data.player1Name) }}>
                            {
                                numOfPlayers === 1
                                    ? <RiComputerLine className={'player_user'} />
                                    : <AiOutlineUser className={'player_user'} />
                            }
                            <div className="player_color" style={{ backgroundColor: colorOfPlayer("player1")[0], background: colorOfPlayer("player1")[1] }} />
                            {/* <div className="playerWins">Wins: {this.state.game.player1.wins}</div> */}
                        </div>
                        <div className={"board"}>
                            {this.initboard()}
                        </div>
                        <div className="player2_side player_side" style={{ border: this.isThisCurPlayer(this.props.data.player2Name) }}>
                            <AiOutlineUser className={'player_user'} />
                            <div className="player_color" style={{ backgroundColor: colorOfPlayer("player2")[0], background: colorOfPlayer("player2")[1], border: `1px solid ${colorOfPlayer("player2")[0]}`}} />
                            {/* <div className="playerWins">Wins: {this.state.game.player2.wins}</div> */}
                        </div>
                    </div>
                }
                <div className={"row table_buttons"}>
                    <button className={"undo"} onClick={this.undoLastMove}><ImUndo2 /></button>
                    <Link className={"link_to_welcome"} to="/"><GoHome /></Link>
                </div>
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