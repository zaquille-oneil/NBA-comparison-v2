import React, { Component } from 'react';
import '../App.css';

class Banner extends Component {
   render() {
      return (
         <div className="App-header" style={{whiteSpace: 'nowrap'}}>
            <div>NBA - 1 on 1</div>
         <span style={{fontSize: 'small', color: '#004E85', backgroundColor: '#5CA0D0'}}> choose two players and find out who wins.
                   <br/> by zacchias - built with react, javascript, bootstrap</span>
         </div>
      )
   }
}

export default Banner;
