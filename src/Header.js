import React, { Component } from 'react';
import './App.css';
import bghead from './img/image.svg';
import man from './img/boy.png';
import fb from './img/fb.png';
import tw from './img/twitter.png';
import gh from './img/github.png';
import li from './img/linkedin.png';
import pt from './img/pinterest.png';
import man1 from './img/man1.png';
import man2 from './img/man2.png';
import msg from './img/message.png';
import placeholder from './img/placeholder.png';
import email from './img/email.png';
import MyService from './MyService';
import MyPortofolio from './MyPortofolio';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component{
    render(){
        var bgheads = {
            width: '735px',
            left: '45%',
            position: 'absolute',
            overflow: 'hidden',
        }

        var h1 = {
             marginLeft: '45%',
             marginTop:20
        }

        return(
            <div>
        <div className="text-judul">
            <img src={bghead} style={bgheads} />
            <div style={h1}>
                <h1 style={{
                    fontSize:'50px',
                }}>Hi !</h1>

                <h1 style={{
                    color:'#685AA7',marginTop:'-10px',fontSize:'50px',fontWeight:500
                }}>I'm Human</h1>
                <h2 style={{
                    marginLeft:200, fontSize:'30px',fontWeight:'200'
                }}>a graphic designer</h2>
            </div>
            <div className="image">
                <img src={man} style={{
                            width:'200px',
                            marginLeft:'150px',
                            position:'absolute'
                        }}/>
                <h1 style={{
                    marginLeft: '27%', fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>About Me</h1>
                {/* Button */}
                { <button className="btn btn-primary" style={{
                    borderRadius:'50px',
                    width:'200px',
                    height:'80px',
                    textAlign:'left',
                    fontSize:'30px',
                    left:'70px',
                    float:'right',
                    position:'relative',
                    backgroundColor:'#685AA7',
                    borderColor:'#685AA7'
                }}>Hire Me</button>     }
                <div style={{
                    marginLeft: '27%',width:'600px',letterSpacing:'0.1em',color: 'gray',
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla nibh mi, ornare
                    </p>
                </div>
                <div className="getsocial">
                <h2 style={{
                    marginLeft:'27%',
                    marginBottom:'15px',
                    fontSize: '20px'
                }}>Get Social :</h2>
                <a href="#">
                <img src={fb} style={{
                            width:'30px',
                            marginLeft:'27%',  
                        }}/>
                </a>
                
                <a href="#">
                <img src={tw} style={{
                            width:'30px',
                            marginLeft:'1%',  
                        }}/>
                </a>
                <a href="#">
                <img src={gh} style={{
                    width:'30px',
                    marginLeft:'1%',
                }}/>
                </a>
                <a href="#">
                <img src={li} style={{
                            width:'30px',
                            marginLeft:'1%',
                            
                        }}/>
                </a>
                <a href="#">
                <img src={pt} style={{
                            width:'30px',
                            marginLeft:'1%',
                            
                        }}/>
                </a>
                </div>
                
            </div>
            <MyService/>
            <br></br>
            <br></br>   
            {/* text what i did
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
                {/* <button className="btn btn-primary" style={{
                    borderRadius:'25px',
                    width:'150px',
                    height:'40px',
                    fontSize:'18px',
                    position:'relative',
                    backgroundColor:'#685AA7',
                    borderColor:'#685AA7'
                }}>Browse All</button>    
            </div> */}

            <MyPortofolio/>
             
            {/* <div className="text-center" style={{marginTop:'215px'}}>
                <p>Want to work with me?</p>
                <h1 style={{
                    fontSize:'20px',color:'#685AA7',fontWeight:300
                }}>Always feel free to Contact and Hire me</h1>
                <div className='text-right' style={{padding:'20px'}}>
                {/* Button */}
                {/* <button className="btn btn-primary" style={{
                    borderRadius:'25px',
                    width:'150px',
                    height:'40px',
                    fontSize:'18px',
                    position:'relative',
                    backgroundColor:'#685AA7',
                    borderColor:'#685AA7'
                }}>Hire Me</button>    
            </div> */}
            {/* <div className="text-center" style={{marginTop:'40px'}}>
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
            </div> */}

            <Testimonial/>
            {/* <div className="text-center" style={{marginTop:'40px'}}>
                <p>How can you communicate?</p>
                <h1 style={{
                    fontSize:'30px',color:'#685AA7',fontWeight:300
                }}>Contact Me</h1>
            </div>
            </div>
            </div> */}

            <Contact/>
            <Footer/>

            </div>
            </div>
        )
    }
}