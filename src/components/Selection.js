import React, { Component } from 'react';
import '../App.css'
import 'react-select/dist/react-select.css';
//import data from '../data'
import playerdata from '../playerdata'
// import fetch from 'isomorphic-fetch'

var Select = require('react-select')

// var myHeaders = new Headers();
// var myInit = { method: 'GET',
//                headers: myHeaders,
//                cache: 'default' };

class Selection extends Component {
	constructor(props) {
		super(props);
      this.state = {
         player : {"label":"","value":"20f85838-0bd5-4c1f-ab85-a308bafaf5bc","averages":{"points":12.7,"blocked_att":0.55,"turnovers":1.11,"free_throws_att":2.71,"field_goals_att":10.81,"off_rebounds":1.45,"two_points_att":7.48,"assists":1.9,"blocks":0.5,"personal_fouls":2.15,"two_points_made":3.95,"flagrant_fouls":0,"rebounds":5.06,"three_points_made":0.96,"minutes":28.7,"def_rebounds":3.61,"free_throws_made":1.95,"field_goals_made":4.91,"steals":0.81,"three_points_att":3.34},"team":"Magic"}
      }
      //no state
		this.updateValue = this.updateValue.bind(this)
      this.choosePlayer = this.choosePlayer.bind(this)
	}

	updateValue (newValue) {
		this.setState( {
         player : newValue
      })
      // this.props.onChoice(newValue)
      // console.log(`trying to fetch ${newValue.label}..`)
      // fetch(`http://api.sportradar.us/nba-t3/players/${newValue.value}/profile.json?api_key=n33p6rz7fdq93zapnhtchpv8`,myInit)
      // .then(response => console.log(response))
	}

   choosePlayer () {
      if (this.state.player) {
         this.props.onChoice(this.state.player)
      }
      else {
         console.log('NO')
      }
   }

	render() {
		return (

			<div className="selection-panel">
			<Select
			  style={{textAlign: 'left',lineHeight:'34px',color: '#aaa'}}
			  name="form-field-name"
			  value={this.state.player} //prop
			  options={playerdata}
			  onChange={this.updateValue}
           placeholder={'...'}
			/>
      <button onClick={this.choosePlayer} className="btn btn-default player-btn">Choose</button>
			</div>
		)
	}
}

export default Selection;
