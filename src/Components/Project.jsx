import { CardMedia, makeStyles } from '@material-ui/core';
import React, {useState} from 'react'
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';

import RealEstate from '../asset/Real_Estate_Agent.png';
import Gurunavi from '../asset/Gurunavi.png';
import NYT from '../asset/nyt.png';
import MENU from '../asset/today_s_menu.png';
import Calorywatcher from '../asset/calorywatcher.png'

const useStyles = makeStyles({
    project:{
        width: '90vw', margin:'5vh auto', paddingTop: '8vh'
    },
    title:{
        fontSize: 'calc(1.5rem + 1vmin)', opacity: '0', rotateX: '-90deg', animation: '$showup 0.7s ease-out 0.5s forwards'
    },
    '@keyframes showup':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    cardWrapper:{display: 'flex', flexFlow: 'row wrap', margin:'4vh auto',justifyContent:'space-around'},
    card:{minWidth:'350px', maxWidth: '350px', margin:'10px', opacity: 0, animation: '$showup-card 0.8s ease-out 0.6s forwards' },
    '@keyframes showup-card':{
        from:{width: 0, flex: 1, opacity: 0, transform: 'rotateX(-90deg)'},
        to:{width: '350px', flex: 1, opacity: 1, transform: 'rotateX(0deg)'}
    },
    
    cardTitle:{fontSize:'1.3em', fontWeight:'600', textAlign:'left', marginLeft: '1.2vw', marginBottom:'1.2vh'},
    cardSnippet:{textAlign:'left',margin:'1.2vh 1.2vw'},
    
    media:{margin:'auto 1vw', height: '240px', border: '1px solid #502C58', borderRadius:'5px', position: 'relative'},
    mediahover:{ height: '100%', width: '100%', position: 'absolute', display: 'inline-block', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius:'5px', backgroundColor:'rgba(130, 86, 175, 0.7)',border: '1px solid rgba(130, 86, 175, 0.7)', color: 'rgba(82, 40, 136, 0)', transitionDuration: '1s',
        '&:hover':{ backgroundColor:'rgba(130, 86, 175, 0)',border: '1px solid rgba(130, 86, 175, 0)', color: 'rgba(82, 40, 136, 1)', fontWeight: '900'}},
    mediaLink:{fontSize: '0.9rem', color: '#F4e25B', textDecoration:'none', backgroundColor: '#502C58', padding: '5px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'},
    
    
    cardContent:{display:'flex', flexDirection: 'row', lineHeight: '1.5', margin:'0 1vw'},
    contentP:{textAlign:'left', margin:'auto 10px'},
    '@global':{
        '.MuiIconButton-root':{color:'#fff'},
        '.MuiSvgIcon-root':{fill:'#fff'}
    },
    icon:{transitionDuration: '1s',
        '&:hover':{fill:'#F4e25B'}
    },
    
})

function Project(){
    const classes = useStyles();
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    const [open5, setOpen5] = useState(true);

    const handleOpenClick1=()  =>{
        setOpen1(!open1);
    }
    const handleOpenClick2=()  =>{
        setOpen2(!open2);
    }
    const handleOpenClick3=()  =>{
        setOpen3(!open3);
    }
    const handleOpenClick4=()  =>{
        setOpen4(!open4);
    }
    const handleOpenClick5=()  =>{
        setOpen5(!open5);
    }

    return(
        <div className={classes.project}>
            <p className={classes.title}>Project</p>
            <div className={classes.cardWrapper}>
                <div className={classes.card}>
                    <p className={classes.cardTitle}>
                        Gurunavi
                    </p>
                    <p className={classes.cardSnippet}>App for searching restaurants in Japan</p>
                    <CardMedia
                        className={classes.media}
                        image={Gurunavi}>
                            <div className={classes.mediahover}></div>
                            <a className={classes.mediaLink} href="https://mobara121.github.io/Gurunavi/">https://mobara121.github.io/Gurunavi/</a>
                    </CardMedia>
                    <CardActions>
                        <IconButton onClick={handleOpenClick1}>
                            <ExpandMoreIcon className={classes.icon}/>
                        </IconButton>
                    </CardActions>
                    {!open1 ? 
                        <div className={classes.cardContent}>
                            <p className={classes.contentP}>HTML, CSS, React.js, Material-Ui, Restful API, Github</p>
                            <IconButton>
                                <a href="https://github.com/mobara121/Gurunavi"><GitHubIcon className={classes.icon}/></a>
                            </IconButton>
                        </div>
                    : ''}
                </div>
                <div className={classes.card}>
                    <p className={classes.cardTitle}>
                        The New York Times
                    </p>
                    <p className={classes.cardSnippet}>App for searching news articles</p>
                    <CardMedia
                        className={classes.media}
                        image={NYT}>
                            <div className={classes.mediahover}></div>
                            <a className={classes.mediaLink} href="https://mobara121.github.io/new_york_times_app/">https://mobara121.github.io/new_york_times_app</a>
                    </CardMedia>
                    <CardActions>
                        <IconButton onClick={handleOpenClick2}>
                            <ExpandMoreIcon className={classes.icon}/>
                        </IconButton>
                    </CardActions>
                    {!open2 ? 
                        <div className={classes.cardContent}>
                            <p className={classes.contentP}>HTML, CSS, React.js, Material-Ui, Restful API, Github</p>
                            <IconButton>
                                <a href="https://github.com/mobara121/new_york_times_app"><GitHubIcon className={classes.icon}/></a>
                            </IconButton>
                        </div>
                    : ''}
                </div>
                <div className={classes.card}>
                    <p className={classes.cardTitle}>
                        Today's Menu
                    </p>
                    <p className={classes.cardSnippet}>App for finding recipe</p>
                    <CardMedia
                        className={classes.media}
                        image={MENU}>
                            <div className={classes.mediahover}></div>
                            <a className={classes.mediaLink} href="https://mobara121.github.io/EdifyTest/">https://mobara121.github.io/EdifyTest/</a>
                    </CardMedia>
                    <CardActions>
                        <IconButton  onClick={handleOpenClick3}>
                            <ExpandMoreIcon className={classes.icon}/>
                        </IconButton>
                    </CardActions>
                    {!open3 ? 
                        <div className={classes.cardContent}>
                            <p className={classes.contentP}>HTML, CSS, React.js, Material-Ui, Restful API, Github</p>
                            <IconButton>
                                <a href="https://github.com/mobara121/EdifyTest"><GitHubIcon className={classes.icon}/></a>
                            </IconButton>
                        </div>
                    : ''}
                </div>
                <div className={classes.card}>
                    <p className={classes.cardTitle}>
                        Real Estate Agent
                    </p>
                    <p className={classes.cardSnippet}>Website for a Real Estate Agent</p>
                    <CardMedia
                        className={classes.media}
                        image={RealEstate}>
                            <div className={classes.mediahover}></div>
                            <a className={classes.mediaLink} href="https://mobara121.github.io/Real_Estate/#/chizuki_watanabe">https://mobara121.github.io/<br/>Real_Estate/#/chizuki_watanabe</a>
                    </CardMedia>
                    <CardActions>
                        <IconButton  onClick={handleOpenClick4}>
                            <ExpandMoreIcon className={classes.icon}/>
                        </IconButton>
                    </CardActions>
                    {!open4 ? 
                        <div className={classes.cardContent}>
                            <p className={classes.contentP}>HTML, CSS, React.js, Material-Ui, Styled-Component, Github</p>
                            <IconButton>
                                <a href="https://github.com/mobara121/Real_Estate"><GitHubIcon className={classes.icon}/></a>
                            </IconButton>
                        </div>
                    : ''}
                </div>    
                <div className={classes.card}>
                    <p className={classes.cardTitle}>
                        Calorie Watcher (PERN)
                    </p>
                    <p className={classes.cardSnippet}>Look up max. calories you should eat per day. </p>
                    <CardMedia
                        className={classes.media}
                        image={Calorywatcher}>
                            <div className={classes.mediahover} ></div>
                            <a className={classes.mediaLink} href="https://caloriewatcher-app.herokuapp.com/">https://caloriewatcher-app.herokuapp.com/</a>
                    </CardMedia>
                    <CardActions>
                        <IconButton  onClick={handleOpenClick5}>
                            <ExpandMoreIcon className={classes.icon}/>
                        </IconButton>
                    </CardActions>
                    {!open5 ? 
                        <div className={classes.cardContent}>
                            <p className={classes.contentP}>HTML, CSS,  Material-Ui, PERN (Restful API, React.js, PostgreSQL, pgAdmin, Express.js, Node.js), Heroku, Github</p>
                            <IconButton>
                                <a href="https://caloriewatcher-app.herokuapp.com/"><GitHubIcon className={classes.icon}/></a>
                            </IconButton>
                        </div>
                    : ''}
                </div>    
            </div>
        </div>
    )
}

export default Project;