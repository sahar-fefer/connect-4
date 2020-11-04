import React from 'react';

class Cell extends React.Component {
    constructor() {
        super();
        this.state = {
            round: 0
        }
    }
    
    onEnter = () => {
        console.log(this.props.col);
    };

    onLeave = () => {
        console.log("bay");
    };

    cellClicked = () => {
        this.state.round = 0;
        this.props.playof(this.props.col);
    };

    createColorState = () => {
        if (this.props.color === undefined) {
            return "#ffffff8f"
        } else {
            return this.props.color
        }
    };

    computerMove = () => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * (this.props.colsNum - 0)) + 0;
            return this.props.playof(random);
        }, 250);
    }

    render() {
        { this.props.currentPlayer.type === "computer" & this.state.round++ === 0 && this.computerMove(); }
        console.log("currentPlayer: ", this.props.currentPlayer.name);
        return (

            <div className="cell"
                onClick={() => this.cellClicked()}
                style={{ backgroundColor: this.createColorState() }} />
        )
    }
}

export default Cell;