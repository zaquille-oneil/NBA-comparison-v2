import React, { Component } from 'react';
import '../App.css'

class Stats extends Component {
   constructor(props) {
      super(props);
      // this.state = {
      //    data : {this.props.data}
      // }
   }
   render() {
      var stats = {
            points: this.props.data.averages.points,
            assists: this.props.data.averages.assists,
            rebounds: this.props.data.averages.rebounds,
            turnovers: this.props.data.averages.turnovers,
            fg: Math.round(this.props.data.averages.field_goals_made/this.props.data.averages.field_goals_att * 10000)/100,
         }
      return(
         <div className="stat-box">
         <table className="table table-hover table-bordered">
         <tbody>
            <tr>
             <td>Points PG</td>
             <td>{stats.points}</td>
            </tr>
            <tr>
             <td>Assists PG</td>
             <td>{stats.assists}</td>
            </tr>
            <tr>
             <td>Rebounds PG</td>
             <td>{stats.rebounds}</td>
            </tr>
            <tr>
             <td>Turnovers PG</td>
             <td>{stats.turnovers}</td>
            </tr>
            <tr>
             <td>Field Goal %</td>
          <td>{isNaN(stats.fg) ? '-' : stats.fg}</td>
            </tr>
         </tbody>
         </table>
         </div>
      )
   }
}

export default Stats;
