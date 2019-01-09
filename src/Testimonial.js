import React, { Component } from 'react';
import './App.css';
import man1 from './img/man1.png';
import man2 from './img/man2.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Testimonial extends Component{
    render(){
        return (
            <div>
<div className="text-center" style={{marginTop:'40px'}}>
                <p>What think client about me?</p>
                <h1 style={{
                    fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>Testimonial</h1>
            </div>
            <div className='container'>
            <div className="card-deck">
            <span class="rounded"></span>
                <div className="card" style={{width: '100rem', backgroundColor:'#E4E4E4',borderColor:'white'}}>
                    <div className="card-body text-center">
                        <img src={man1} style={{
                                width:'80px',marginBottom:'20px'
                            }}/>
                        <h5 className="text-left card-title">Tsaqif</h5>
                        <h5 className="text-left">UI/UX Designer </h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        </p>
                    </div>
                </div>
                <div className="card" style={{width: '100rem', backgroundColor:'#E4E4E4',borderColor:'white'}}>
                    <div className="card-body text-center">
                        <img src={man2} style={{
                                width:'80px',marginBottom:'20px'
                            }}/>
                        <h5 className="text-left card-title">Aghfid</h5>
                        <h5 className="text-left">Front End Developer </h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>         
                    </div>
        )
    }
}