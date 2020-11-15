import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfPlayers: undefined
        };
    };

    setNumOfPlayers = (numOfPlayers) => {
        this.setState({
            'numOfPlayers': numOfPlayers
        });
        this.props.changeToTable('numOfPlayers', numOfPlayers)
    }

    render() {
        const { numOfPlayers } = this.state;
        return (
            <div className="home">
                <div className="wrapper">
                    <img src='/images/c-logo.png' alt="logo" className={'logo'} />
                    <div className='row square_wrapper'>
                        <Link className={`square player_square ${numOfPlayers === 1 ? 'chosen' : ''} col`}
                            onClick={() => this.setNumOfPlayers(1)}
                            to={'/pre-table'}>
                            <AiOutlineUser onClick={() => this.setNumOfPlayers(1)} />
                        </Link>
                        <Link className={`square player_square ${numOfPlayers === 2 ? 'chosen' : ''} col`}
                            onClick={() => this.setNumOfPlayers(2)}
                            to={'/pre-table'}>
                            <AiOutlineUser onClick={() => this.setNumOfPlayers(2)} />
                            <AiOutlineUser onClick={() => this.setNumOfPlayers(2)} />
                        </Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;