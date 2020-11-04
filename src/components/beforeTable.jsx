import React from 'react';
import Cell from './cell';
import Table from "./table";
import "../style/board.css"

const Game = require("../moduls/game");
const initgame = Game.initGame;

class beforeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: "",
        };
    }

    componentDidMount() {
        this.initGame()
    }
    // componentWillMount() {
    //     this.initboard()
    // }

    initGame = () => {
        this.state.game.setPlayers();
        this.state.game.setBoard(this.props.data.col, this.props.data.rows);
        console.log(this.state.game);
    };

    initboard() {
        const gameinit = initgame(2,5, 5);
        console.log(gameinit);
        console.log(this.state.game);
        // return this.state.game.board.board.map((row, rowIndex) => {
        //     return (
        //         <div className="rows">
        //             {row.map((col, colIndex) => <Cell row={rowIndex} col={colIndex} color={col}
        //             play = {this.play}
        //             />)}
        //         </div>
        //     );
        // });
    }

    play(col) {

        console.log(this.state.game);
        // this.game.playMove(col)
    };

    render() {
        return (
            <div>
                <h1>tazzz</h1>
                <div className={"board"}>

            </div>
        )
    }
}

export default beforeTable;