import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles =makeStyles({
    home:{
        maxHeight: '100%',
        margin: '40vh auto',
        paddingTop: '5vh'
    },
    name:{
        fontSize: 'calc(3em + 1vmin)',
        letterSpacing:'0.12em',
        opacity: 0,
        animation: '$name-showup 0.7s ease-out 0.5s forwards'
    },
    '@keyframes name-showup':{
        from:{
            opacity: 0,
            transform: 'rotateX(-90deg)'
        },
        to:{
            opacity: 1,
            transform: 'rotateX(0deg)'
        }
    }
})

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.home}>
            <div className={classes.name}>
                MIZUE O'BARA
            </div>
        </div>
    )
}

export default Home;