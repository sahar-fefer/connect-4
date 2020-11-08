import React from 'react';
import { Link } from "react-router-dom";

class PreTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: undefined,
            col: undefined
        };
    };

    setBoardSize = (col, rows) => {
        this.setState({
            'col': col,
            'rows': rows
        });
        this.props.changeToTable('col', col);
        this.props.changeToTable('rows', rows);
    };

    render() {
        const { col } = this.state;
        return (
            <div className="home" style={{
                background: `url('${process.env.PUBLIC_URL}/images/background_home.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="wrapper">
                    <div className='row square_wrapper'>
                        <Link className={`square board_square s ${col === 5 ? 'chosen' : ''} col`}
                            onClick={() => this.setBoardSize(5, 5)}
                            to={'/table'}>
                            S
                        </Link>
                        <Link className={`square board_square m ${col === 6 ? 'chosen' : ''} col`}
                            onClick={() => this.setBoardSize(6, 5)}
                            to={'/table'}>
                            M
                        </Link>
                        <Link className={`square board_square l ${col === 7 ? 'chosen' : ''} col`}
                            onClick={() => this.setBoardSize(7, 5)}
                            to={'/table'}>
                            L
                        </Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default PreTable;