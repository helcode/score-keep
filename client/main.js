import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/ui/App';



Meteor.startup( () => {
  Tracker.autorun( () => {
    let title = 'Score Keep';
    let subtitle = 'Created by HELCODE';
    let players = Players.find( {}, { sort: { score: -1 } } ).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let jsx = (
      <App title ={title} subtitle={subtitle} players={positionedPlayers}/>
    );
    ReactDOM.render( jsx, document.getElementById( 'app' ) );
  } );
} );
