import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
   constructor(props) {
      super(props)
      // this.state = {
      //    isShowing : false
      // }
   }

   render() {
      var toggler = this.props.toggle ? 'flex' : 'none'
      //console.log(this.props.data)
      var value = []
      value[0] = (this.props.data.points[0]*this.props.data.shooting[0]/45 + this.props.data.assists[0]*2.3 + this.props.data.rebounds[0]*1.8 - this.props.data.turnovers[0]*1.8)
      value[1] = (this.props.data.points[1]*this.props.data.shooting[1]/45 + this.props.data.assists[1]*2.3 + this.props.data.rebounds[1]*1.8 - this.props.data.turnovers[1]*1.8)
      return (
         <div  style={{display : toggler, justifyContent : 'center'}}>
            <div className="result">
               <table className="table table-hover table-bordered">
               <tbody>
                  <tr>
                   <td>Player</td>
                   <td>{this.props.data.playerA}</td>
                   <td>{this.props.data.playerB}</td>
                  </tr>
                  <tr>
                   <td>Points</td>
                   <td>{Math.round(this.props.data.points[0])}</td>
                   <td>{Math.round(this.props.data.points[1])}</td>
                  </tr>
                  <tr>
                   <td>Assists</td>
                   <td>{Math.round(this.props.data.assists[0])}</td>
                   <td>{Math.round(this.props.data.assists[1])}</td>
                  </tr>
                  <tr>
                   <td>Rebounds</td>
                   <td>{Math.round(this.props.data.rebounds[0])}</td>
                   <td>{Math.round(this.props.data.rebounds[1])}</td>
                  </tr>
                  <tr>
                   <td>Turnovers</td>
                   <td>{Math.round(this.props.data.turnovers[0])}</td>
                   <td>{Math.round(this.props.data.turnovers[1])}</td>
                  </tr>
                  <tr>
                   <td>Field Goal %</td>
                   <td>{Math.round(this.props.data.shooting[0]*100)/100}</td>
                   <td>{Math.round(this.props.data.shooting[1]*100)/100}</td>
                  </tr>
                  <tr>
                   <td>Final score</td>
                   <td>{Math.round(value[0])}</td>
                   <td>{Math.round(value[1])}</td>
                  </tr>
               </tbody>
               </table>
               <span style={{fontSize: '2em', fontWeight: 400}}>{value[0] > value[1] ? this.props.data.playerA : this.props.data.playerB} wins!</span>

            </div>
         </div>
      )
   }
}

{/* <span>{this.props.data.playerA}/{this.props.data.playerB}</span>
<span>{Math.round(this.props.data.points[0])}/{Math.round(this.props.data.points[1])}</span>
<span>{Math.round(this.props.data.assists[0])}/{Math.round(this.props.data.assists[1])}</span>
<span>{Math.round(this.props.data.rebounds[0])}/{Math.round(this.props.data.rebounds[1])}</span>
<span>{Math.round(this.props.data.turnovers[0])}/{Math.round(this.props.data.turnovers[1])}</span>
<span>{Math.round(this.props.data.shooting[0]*100)/100}/{Math.round(this.props.data.shooting[1]*100)/100}</span> */}


export default Result;
