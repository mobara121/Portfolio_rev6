import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    ul:{
        background: 'rgba(80, 44, 88, 0.3)',
        backgroundImage: 'linear-gradient(90deg),rgba(80, 44, 88, 1) 0%, rgba(80, 44, 88, 1) 55%, rgb(85, 54, 92) 65%, rgb(92, 64, 100) 75%, rgb(107, 70, 117) 90%,rgb(122, 75, 133) 95%, rgba(130, 86, 145, 1) 100%',

        boxShadow: '2px 2px 4px 0px #43284b',
        width: '100vw',
        position: 'fixed',
        top:-16,
        height: '8vh',
        lineHeight: '8vh',
        zIndex: 1,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        listStyle: 'none',
        paddingInlineStart: '0',
        padding:'30px auto',
        opacity: 0,
        transform: 'rotateX(-90deg)',
        animation: '$navbar-showup 0.7s ease-out 0.65s forwards'
    },
    '@keyframes navbar-showup':{
        from:{
            opacity: 0,
            transform: 'rotateX(-90deg)',
        },
        to:{
            opacity: 1,
            transform: 'rotateX(0deg)',
        }
    },
    link:{
        color: '#fff',
        textDecoration: 'none',
        fontSize: 'calc(0.8em + 1vmin)',
        transitionDuration: '0.6s',
        '&:hover':{
            color: '#F4E25B',
            fontSize: 'calc(0.87em + 1vmin)',
            fontWeight: '500'
        }
    }
});

function Navbar(){
    const classes =useStyles();
    return(
        <div className={classes.navbar}>
            <ul className={classes.ul}>
                <li><Link to='/portfolio_rev6' className={classes.link}>Home</Link></li>
                <li><Link to='/about' className={classes.link}>About</Link></li>
                <li><Link to='/project' className={classes.link}>Project</Link></li>
                <li><Link to='/contact' className={classes.link}>Contact</Link></li>
            </ul>
        <div>   
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/experience"><Experience/></Route>
                <Route exact path="/project"><Project/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/portfolio_rev6"><Home/></Route>
            </Switch>
        </div>
        </div>
    )
}

export default Navbar;