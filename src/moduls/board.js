const player = require("./player");

class Board {
    constructor(rows, colls) {
        this.rows = rows;
        this.colls = colls;
        this.allCells = rows * colls;
        this.lastCoin = null;
        this.curPlayer = null;
        this.endGame = false;
    }

    initBoard(rows, coll) {

        this.board = [];
        this.fullCells = 0;
        for (let row = 0; row < rows; row++) {
            let line = [];
            for (let col = 0; col < coll; col++) {
                line.push(undefined);
            }
            this.board.push(line);
        }
        return this.board;

    }

    handleMove(col, player, changeColor, theBestOf) {
        const checkCell = this.checkCell(col);
        this.curPlayer = player;
        if (checkCell) {
            this.addCoin(checkCell, changeColor, theBestOf);
            return true
        }
        return false
    }

    checkCell(col) {
        if (col >= this.colls) {
            return false
        }
        for (let row = this.rows - 1; row >= 0; row--) {
            if (!this.board[row][col]) {
                return { row, col }
            }
        }
        return false
    }

    addCoin(rowAndCol, changeColor, theBestOf) {
        this.board[rowAndCol.row][rowAndCol.col] = this.curPlayer.color;
        this.fullCells++;
        this.lastCoin = rowAndCol;
        changeColor();
        if (this.checkIfWin(theBestOf) & !this.endGame) {
            setTimeout(() => {
                this.initBoard(this.rows, this.colls)
                alert('click on the table to start a new game')
            }, 200);
        } else if (this.endGame) {
            document.location.href = "/";
        }
    }

    undo() {
        const { row, col } = this.lastCoin;
        this.board[row][col] = undefined;
    }

    ifEndGame() {
        if (this.fullCells === this.allCells) {
            this.endGame = true;
        }
        return false
    }

    checkIfWin(theBestOf) {
        if (this.left_right() || this.top_bottom() || this.diagonal_bottom_left_top_right() || this.diagonal_top_left_bottom_right()) {
            this.curPlayer.wins++;
            const numOfWins = Math.ceil(theBestOf / 2);
            if (this.curPlayer.wins === numOfWins) {
                this.endGame = true;
            }
            return true
        }
        return false;
    }

    top_bottom() {
        for (let col = 0; col <= this.colls; col++) {
            for (let row = 0; row <= this.rows - 4; row++) {
                let current = this.board[row][col];
                if (current === undefined) {
                    continue
                }
                if (current === this.board[row + 1][col] && current === this.board[row + 2][col] && current === this.board[row + 3][col]) {
                    alert("we have a winner!!... from top to bottom");
                    return true;
                }
            }
        }
    };

    left_right() {
        for (let i = 0; i <= this.rows - 1; i++) {
            for (let x = 0; x <= this.colls - 4; x++) {
                let current = this.board[i][x];
                if (current === undefined) {
                    continue
                }
                if (current === this.board[i][x + 1] && current === this.board[i][x + 2] && current === this.board[i][x + 3]) {
                    alert("we have a winner!!... from left to right");
                    return true;
                }
            }
        }
    };

    diagonal_top_left_bottom_right() {
        for (let row = 0; row <= this.rows - 4; row++) {
            for (let col = 0; col <= this.colls - 4; col++) {
                let current = this.board[row][col];
                if (current === undefined) {
                    continue
                }
                if (current === this.board[row + 1][col + 1] && current === this.board[row + 2][col + 2] && current === this.board[row + 3][col + 3]) {
                    alert("we have a winner!!... diagonal top left to bottom right wow!");
                    return true;
                }
            }
        }

    };

    diagonal_bottom_left_top_right() {
        for (let row = 3; row <= this.rows - 1; row++) {
            for (let col = 0; col <= this.colls - 4; col++) {
                let current = this.board[row][col];
                if (current === undefined) {
                    continue
                }
                if (current === this.board[row - 1][col + 1] && current === this.board[row - 2][col + 2] && current === this.board[row - 3][col + 3]) {
                    alert("we have a winner!!... diagonal bottom left to top right");
                    return true;
                }
            }
        }
    };
}

module.exports = Board;