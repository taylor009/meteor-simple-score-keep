/**
 * Created by taylor on 6/28/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <TitleBar title={this.props.title}/>
                <PlayerList players={this.props.players}/>
                <AddPlayer/>
            </div>
        )
    }
}

App.propsTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};