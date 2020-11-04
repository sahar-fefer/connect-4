//initialize a new matrix with null.
// the user insert height && width.
import React from "react";

const initGame = (rows, cols) => {
};
//draw table by html and css every cell in the matrix convert to "box" with id.
//the id of every "box" is the place in the matrix.
const drawTabel = () => {
};
//whoseTurn tell us whose turn in the game.
// this function also change the state in the app to show the current player.
const whoseTurn = () => {
};
//checkWinner checks if the current player is winner or not.
//checkWinner checks all four directions in the matrix :
//  Top-to-bottom
//  Bottom-to-top
//  Left-to-right
//  Diagonal(Left-bottom-to-right-top)
//  Diagonal(left-top-to-right-bottom)
//if we have a winner we call endGame
const checkWinner = () =>{
};
// every time we add a coin ,we add += 1 to counter, by this endgame func can check if the board is full. or =>
//checkWinner call endGame.
const endGame = () =>{
};
//addCoin add a coin to the table after he check the current index equal to null, if so the current index == the current player and change the turn of the players
//
const addCoin = () =>{
};

//ROBOT PLAYER FUNCTIONS
//robotPlayer call randomStep
const robotPlayer = () =>{
};
//randomStep check the boxes with null by for loop all over the table =>
// and randomize one cell to addCoin.
const randomStep = () =>{
};




{/*<div>{this.state.game &&*/}
{/*<div className="board">*/}
{/*    {this.renderBoard()}*/}
{/*</div>}*/}
{/*</div>*/}


{/*<div className="cell"*/}
{/*     onClick={() => this.cellClicked()}*/}
{/*     style={{backgroundColor : this.props.color}}/>*/}