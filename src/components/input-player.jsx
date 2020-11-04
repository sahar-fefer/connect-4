import React from 'react';

class InputPlayer extends React.Component {
    render() {
        return (
            <div>
                <header>Player {this.props.id}</header>
                Name: <input className="inputPlayer input" type="text" />
                Select your color: <input className="inputPlayer input" type="color" name="favcolor" />
            </div>
        )
    }
}

export default InputPlayer;