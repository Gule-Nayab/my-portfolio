import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate'
import './style.scss'
const Home = ()=>{

    const navigate = useNavigate();

    const hanleNavigateToContactMe = ()=>{
      navigate('/contact')
    }
    return (
        <section id='home' className='home'>
            <div className='home__text-wrapper'>
               <h1>
                Hey , I'm Gul-e-Nayab
                <br/>
                Full Stack developer
               </h1>
            </div>
            <Animate
             play
             duration={1.5}
             delay={1}
             start={{
                transform:'translateY(550px)'
             }}
             end={{
                transform:'translatex(0px)'
             }}
             
             >
            <div className='home__contact-me'>
                <button onClick={hanleNavigateToContactMe}> Hire Me</button>
            </div>
            </Animate>
           
        </section> 
    )
}
export default Home;