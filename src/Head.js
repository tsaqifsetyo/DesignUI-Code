import React, { Component } from 'react';
import './App.css';
import bghead from './img/bg.svg';
import man from './img/man.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const bg = { 
    position: 'absolute',
    width: '500px',
    height: '407px',
    left: '860px',
    top: '5px',      
    }

    const h1 = {
     textAlign:'left',
     position: 'absolute',
     left:'900px',
     marginTop: '65px',
     fontFamily: 'Tahoma'  
    }
    const h11 = {
        textAlign:'left',
        position: 'absolute',
        left:'900px',
        marginTop: '105px',  
       }

    const h2 = {
        position: 'absolute',
        left:'1000px',
        marginTop: '165px',  
        fontWeight: 100
    }
    
    const about = {
        position: 'absolute',
    
        marginTop: '165px',
    }

    return (
     <div className="container-fluid">
          <div className="r">
              <img src={bghead} style={bg}></img>
          
          <h1 style={h1}>Hi! </h1>
          <h1 style={h11}>I'm Human </h1>
          <h2 style={h2}>a graphic designer</h2>
          </div>

            <div class="row" style={about}>
                
                <div class="col">
                    <img src={man}></img>
                </div>
                
                <div class="col">
                    <h3>google.cosm</h3>
                </div>
                
            </div>

     </div>
    );
  }
}

export default App;
