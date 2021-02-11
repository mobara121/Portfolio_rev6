import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import Experience from './Experience';
import Snapshot from '../asset/Snapshot.PNG';

const useStyles = makeStyles({
    about:{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '8vh',
        margin: '5vh auto'
    },
    title:{
        fontSize: 'calc(1.5rem + 1vmin)', opacity: '0', rotateX: '-90deg', animation: '$showup 0.7s ease-out 0.5s forwards'
    },
    '@keyframes showup':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    aboutContainer:{
        display: 'flex',
        flexFlow: 'column wrap',
    },
    intro:{
        display:'flex',
        flexDirection: 'row', 
        flexWrap: 'wrap' ,
        margin: '0 auto',     
    },
    introText:{
        width: '330px',
        textAlign: 'left',
        margin: '1vh auto'
    },
    content:{
        fontSize: '1.1rem',
        padding: '0 1vw',
        lineHeight: '1.4', opacity: '0', rotateX: '-90deg', animation: '$showup 0.7s ease-out 0.65s forwards'
    },
    remark:{
        color: '#F4E25B',
        fontWeight: '600'
    },
    introImg:{
        width: '0',
        margin: '5vh auto',
        position: 'relative', opasity: '0', rotateX: '-90deg', animation: '$showup-img 1.0s ease-out 0.65s forwards'           
    },
    '@keyframes showup-img':{
        from:{width: 0, opacity: 0, transform: 'rotateX(-90deg)'},
        to:{width: '350px', opacity: 1, transform: 'rotateX(0deg)'}
    },
    snapshot:{
        width: '45%',
    },
    shade: {
        width: '45%', height: '188px', backgroundColor: '#8256AF', opacity: '0.5', position: 'absolute', top: '0%', left: '27.5%', zIndex: '1'
    },
    shape1: {
        width: '45%', height: '188px', backgroundColor: '#F4E25B', opacity: '0.6', position: 'absolute', top: '10%', left: '32.5%', zIndex: '-1'
    },
    shape2: {
        width: '45%', height: '188px', backgroundColor: '#F4E25B', opacity: '0.4', position:'absolute', top: '20%', left: '37.5%',zIndex: '-1'
    },
    experience:{
        height: '15vh', lineHeight: '15vh', width: '100vw', display: 'flex', flexDirection: 'column'
    },
    experienceWrapper:{
        margin: '0 auto', opacity: '0', rotateX: '-90deg', animation: '$showup-careerLink 0.8s ease-out 0.8s forwards',
    },   
    experienceLink:{
        textAlign: 'left', fontSize: 'calc(1.4rem)',color: '#fff', textDecoration: 'none', transitionDuration: '1s',
        '&:hover':{
            color:'#F4E25B',
            fontSize: 'calc(1.5rem)'
        }
    },
    '@keyframes showup-careerLink':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
})

function About(){
    const classes = useStyles();
    return(
        <div className={classes.about}>
            <p className={classes.title}>About Me</p>
        <div className={classes.aboutContainer}>
            <div className={classes.intro}>
                <div className={classes.introText}>               
                    <div className={classes.content}>
                    <p>Bilingual professional with a newfound passion for web/software development. </p><p>In my past life, I've worked in laboratories discovering new flavors for ice cream, managed inventories for multi-national companies, even acted as a cultural liaison for <span className={classes.remark}>Japanese</span> citizens living in America. </p>I have just finished  the first phase 
                    and my new journey to become a full-stack developer by studying HTML5, CSS, JavaScript, <span className={classes.remark}>React</span>, C#, and  .NET Framework MVC 5 Web Application at Eleven Fifty Academy.
                    </div>
                </div>
                <div className={classes.introImg}>
                    <img src={Snapshot} alt="/" className={classes.snapshot}></img>
                    <div className={classes.shade}></div>
                    <div className={classes.shape1}></div>
                    <div className={classes.shape2}></div>
                    
                </div>
            </div>
            <div className={classes.experience}>        
                <div className={classes.experienceWrapper}>        
                    <Link to="/experience" className={classes.experienceLink}><p>See my experience ↓</p></Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/experience"><Experience/></Route>
                    </Switch>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;