import React, { Component } from 'react';
import './App.css';
import creativ from './img/creativity.png';
import responsive from './img/responsive.png';
import stairs from './img/stairs.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class MyService extends Component{
    render(){
        return (
        <div>
        <div className="text-center" style={{marginTop:'40px'}}>
                <p>What I Do ?</p>
                <h1 style={{
                    fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>My Service</h1>
            </div>
             
            <div className='container'>
            <div className="card-deck">
                <div className="card" style={{width: '18rem', backgroundColor:'#E4E4E4',borderColor:'white'}}>
                    <div className="card-body text-center">
                        <img src={creativ} style={{
                                width:'80px',marginBottom:'20px'
                            }}/>
                        <h5 className="text-center card-title">Graphic Design</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare Lorem ipsum</p>
                    </div>
                </div>
                <div className="card" style={{width: '18rem', backgroundColor:'#E4E4E4',borderColor:'white'}}>
                    <div className="card-body text-center">
                        <img src={responsive} style={{
                                width:'80px',marginBottom:'20px'
                            }}/>
                        <h5 className="text-center card-title">Web Design</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare Lorem ipsum</p>
                    </div>
                </div>
                <div className="card" style={{width: '18rem', backgroundColor:'#E4E4E4',borderColor:'white'}}>
                    <div className="card-body text-center">
                        <img src={stairs} style={{
                                width:'80px',marginBottom:'20px'
                            }}/>
                        <h5 className="text-center card-title">Interior Design</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare Lorem ipsum</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
}
}