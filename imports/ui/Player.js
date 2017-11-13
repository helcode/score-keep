import React from 'react';
import PropTypes from 'prop-types';


import { Players } from './../api/players';

export default class Player extends React.Component {

  render() {
    let thisPlayer = this.props.player;
    let itemClassName = `item item--position-${thisPlayer.rank}`;

    return (
      <div key={thisPlayer._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{thisPlayer.name}</h3>
            <p className="player__stats">
              {thisPlayer.position} place w/ {thisPlayer.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => Players.update(thisPlayer._id,{$inc:{score:1}})}>+1</button>
            <button className="button button--round" onClick={() => Players.update(thisPlayer._id,{$inc:{score:-1}})}>-1</button>
            <button className="button button--round" onClick={() => Players.remove(thisPlayer._id) }> X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
