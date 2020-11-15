const players = require("./player");
const boardClass = require("./board");

class Game {
    constructor(numOfPlayers, player1Name, player1Color, player2Name, player2Color, cols, rows, theBestOf) {
        this.numOfPlayers = numOfPlayers;
        this.cols = cols;
        this.rows = rows;
        this.player1Data = [player1Name, player1Color];
        this.player2Data = [player2Name, player2Color];
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
        this.board = null;
        this.theBestOf = theBestOf;
    }


    setPlayers = () => {
        const realPlayer = players.Player;
        const computerPlayer = players.Computer;

        this.player1 = new realPlayer(this.player1Data[0], this.player1Data[1]);
        if (this.numOfPlayers === 2) {
            this.player2 = new realPlayer(this.player2Data[0], this.player2Data[1]);
        }
        if (this.numOfPlayers === 1) {
            this.player2 = new computerPlayer()
        }
        this.currentPlayer = this.player1;
        console.log("this.currentPlayer = this.player1;", this.player1)
    };

    setBoard = (cols, rows) => {
        this.board = new boardClass(this.rows, this.cols);
        this.board.initBoard(rows, cols);

    };

    playMove = (col, changeColor) => {
        const save = this.board.handleMove(col, this.currentPlayer, changeColor, this.theBestOf);
        if (save) {
            this.swapPlayer()
        } else {
            console.log(this.currentPlayer.name + " its stile your turn..")
        }
    };

    swapPlayer = () => {
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2
        } else {
            this.currentPlayer = this.player1
        }
    }
}

module.exports = Game;