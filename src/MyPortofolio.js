import React, { Component } from 'react';
import './App.css';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';

export default class MyPortofolio extends Component{
    render(){
        return (
            <div>
<div className="text-center">
                <p>What I Did ?</p>
                <h1 style={{
                    fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>My Portofolio</h1>
            </div>
            <div className="container text-center" style={{color:'#685AA7'}}>
                <a href="#" style={{color:'#685AA7',fontWeight:400,padding:10}}>All</a> | <a href="#" style={{color:'#685AA7',fontWeight:400,padding:10}}>Logo</a> | <a href="#" style={{color:'#685AA7',fontWeight:400,padding:10}}>Web Template</a> | <a href="#" style={{color:'#685AA7',fontWeight:400,padding:10}}>Others</a> 
            </div>
                <br></br>
            <img src={img1} style={{
                width:'25%'
            }}/>
            <img src={img4} style={{
                width:'25%'
            }}/>
            <img src={img3} style={{
                width:'25%'
            }}/>
            <img src={img4} style={{
                width:'25%'
            }}/>
                <br></br>
            <div className='text-center' style={{padding:'20px'}}>
                {/* Button */}
                <button className="btn btn-primary" style={{
                    borderRadius:'25px',
                    width:'150px',
                    height:'40px',
                    fontSize:'18px',
                    position:'relative',
                    backgroundColor:'#685AA7',
                    borderColor:'#685AA7'
                }}>Browse All</button>    
            </div>
             
            <div className="text-center" style={{marginTop:'215px'}}>
                <p>Want to work with me?</p>
                <h1 style={{
                    fontSize:'20px',color:'#685AA7',fontWeight:300
                }}>Always feel free to Contact and Hire me</h1>
                <div className='text-right' style={{padding:'20px'}}>
                {/* Button */}
                <button className="btn btn-primary" style={{
                    borderRadius:'25px',
                    width:'150px',
                    height:'40px',
                    fontSize:'18px',
                    position:'relative',
                    backgroundColor:'#685AA7',
                    borderColor:'#685AA7'
                }}>Hire Me</button>    
            </div>
            </div>
            </div>
            )
            }
        }