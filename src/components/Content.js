import React, { Component } from 'react';
import Selection from './Selection'
import Stats from './Stats'
import Result from './Result'
import '../App.css';

var emptyPlayer = {
   label: 'Choose a',
   team: 'player',
   averages: {
      points: '-',
      assists: '-',
      rebounds: '-',
      turnovers: '-',
      field_goals_att: 0,
      field_goals_made: 0,
   }
}

function getRandom(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.random() * (max-min) + min; //The maximum is inclusive and the minimum is inclusive
}

class Content extends Component {
   constructor(props) {
      super(props);
      this.state = {
         playerA : emptyPlayer,
         playerB : emptyPlayer,
         resultToggle : false,
         resultData : {
            playerA : '',
            playerB : '',
            points : [0,0],
            assists : [0,0],
            rebounds : [0,0],
            turnovers : [0,0],
            shooting : [0,0]
         }
      }
      this.handlePlayerA = this.handlePlayerA.bind(this)
      this.handlePlayerB = this.handlePlayerB.bind(this)
      this.handleVersus = this.handleVersus.bind(this)
   }

   handlePlayerA(player) {
      this.setState({playerA : player})
   }

   handlePlayerB(player) {
      this.setState({playerB : player})
   }

   handleVersus(player) {
      if (this.state.playerA !== emptyPlayer && this.state.playerB !== emptyPlayer && this.state.playerA !== this.state.playerB) {
         this.setState({resultToggle : true})
         var fg = [Math.round(this.state.playerA.averages.field_goals_made/this.state.playerA.averages.field_goals_att * 10000)/100,
                  Math.round(this.state.playerB.averages.field_goals_made/this.state.playerB.averages.field_goals_att * 10000)/100
         ]
         this.setState({ resultData : {
            playerA : this.state.playerA.label,
            playerB : this.state.playerB.label,
            points : [getRandom(0.75,1.33)*this.state.playerA.averages.points, getRandom(0.75,1.33)*this.state.playerB.averages.points],
            assists : [getRandom(0.75,1.33)*this.state.playerA.averages.assists, getRandom(0.75,1.33)*this.state.playerB.averages.assists],
            rebounds : [getRandom(0.66,1.5)*this.state.playerA.averages.rebounds, getRandom(0.66,1.5)*this.state.playerB.averages.rebounds],
            turnovers : [getRandom(0.66,1.5)*this.state.playerA.averages.turnovers, getRandom(0.66,1.5)*this.state.playerB.averages.turnovers],
            shooting : [getRandom(0.9,1.11)*fg[0], getRandom(0.9,1.11)*fg[1]]
         }})
         //console.log(this.state.resultData.points[0])
      }
      else {
         console.log('choose appropriate players')
      }
      console.log(this.state.playerA)
   }

   render() {
      return(
         <div className="content">
            <div className="stat-cards">
               <div className="left-col">
                  <Selection onChoice={this.handlePlayerA} player={this.state.playerA}/>
                  <div className="player-title">{this.state.playerA.label}{'\n'}{this.state.playerA.team}</div>
                  <Stats data={this.state.playerA}/>
               </div>

               <button style={{marginTop: '30px'}} onClick={this.handleVersus}>V.S.</button>

               <div className="right-col">
                  <Selection onChoice={this.handlePlayerB} player={this.state.playerB}/>
                  <div className="player-title">{this.state.playerB.label}{'\n'}{this.state.playerB.team}</div>
                  <Stats data={this.state.playerB}/>
               </div>
            </div>

            <Result toggle={this.state.resultToggle} data={this.state.resultData}/>
         </div>
      )
   }
}

export default Content;
