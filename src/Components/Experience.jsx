import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
    experience:{
         width: '90vw', margin:'5vh auto', paddingTop: '8vh'
    },
    title:{
        height: '3vh',lineHeight: '3vh',fontSize: 'calc(1.5rem + 1vmin)', opacity: '0', rotateX: '-90deg', animation: '$showup 0.7s ease-out 0.5s forwards'
    },
    '@keyframes showup':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    careerContainer:{
        height: '45vh',
        margin: '5vh auto',
    },
    content:{
        backgroundColor: 'rgba(85, 54, 92, 0.6)', color: '#fff', fontSize: 'calc(1rem + 0.7vmin)', opacity: '0', rotateX: '-90deg', animation: '$showup 0.7s ease-out 0.65s forwards', 
        '&:hover':{ 
            backgroundColor: 'rgb(122, 75, 133)',
        }
    },
    // '@global':{
    //     '.MuiSvgIcon-root':{fill:'#fff'}
    // },
    details:{
        display: 'flex', flexDirection: 'column'
    },
    detail:{
        display:'flex', flexDirection: 'row', justifyContent: 'space-between'
    },
    p:{
        margin:'2vh 2.1vw', textAlign:'left'
    },
    p1:{
        margin:'2vh 2.1vw', textAlign:'left', width: '65%'
    },
    p2:{
        margin:'2vh 1vw', textAlign:'center', width: '35%'
    },
    resume:{
        marginTop:'10vh', width: '90vw',display: 'flex', flexDirection: 'row', 
    },
    resumeWrapper:{
        display: 'flex', flexDirection: 'column', textAlign: 'center', fontSize: 'calc(1.4rem)', margin: '0 auto', opacity: '0', rotateX: '-90deg', animation: '$showup-resume 0.8s ease-out 0.8s forwards', transitionDuration: '1s',
        '&:hover':{
            color:'#F4E25B',
            fontSize: 'calc(1.5rem)'
        }
    },
    '@keyframes showup-resume':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    resumeIconWrapper:{
        top: '5px'
    },
    resumeIcon:{
        // marginTop: '20px',
        paddingTop: '10px',
        fill: '#fff',
        '&:hover':{
            fill:'#F4E25B'        
        }
    },
})

function Experience(){
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) =>(event, isExpanded) =>{
        setExpanded(isExpanded ? panel : false);
    };
    
    return(
        <div className={classes.experience}>
            <p className={classes.title}>Experiences</p>
            <div className={classes.careerContainer}>
                <Accordion  className={classes.content} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
                        <p className={classes.p}>America</p>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Administrative Assistant  /  Tsuda USA Corporation</p>
                            <p className={classes.p2}>Aug 2017 - Jun 2020</p>
                        </div>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Executive Assistant / Nachi America Inc.</p>
                            <p className={classes.p2}>Feb 2016 - Jul 2017</p>
                        </div>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Data Analyst / Apple. Inc.</p>
                            <p className={classes.p2}>Oct 2015 - Feb 2016</p>
                        </div>               
                    </AccordionDetails>
                </Accordion>
                <Accordion  className={classes.content} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
                        <p className={classes.p}>Japan</p>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Internal Auditor / Nitto Seimo Co., Ltd</p>
                            <p className={classes.p2}>Nov 2009 - Sep 2014</p>
                        </div>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Translator / Shimanami International</p>
                            <p className={classes.p2}>Jan 2008 - Sep 2009</p>
                        </div>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Research & Development / Ohayo Co., Ltd / Asahi Co., Ltd</p>
                            <p className={classes.p2}>Apr 1998 - Dec 2005</p>
                        </div>               
                    </AccordionDetails>
                </Accordion>
                <Accordion  className={classes.content} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
                        <p className={classes.p}>Education</p>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Software Development / Eleven Fifty Academy</p>
                            <p className={classes.p2}>Jul 2020 - Oct 2020</p>
                        </div>
                        <div className={classes.detail}>
                            <p className={classes.p1}>Web Development / Eleven Fifty Academy</p>
                            <p className={classes.p2}>Apr 2020 - Jul 2020</p>
                        </div>
                        <div className={classes.detail}>
                            <p className={classes.p1}>B.S. Agricultue Operations / Shinshu University</p>
                            <p className={classes.p2}>Apr 1994 - Mar 1998</p>
                        </div>               
                    </AccordionDetails>
                </Accordion>
                <div className={classes.resume}>
                    <div className={classes.resumeWrapper}>
                        <div>See my resume</div>
                        <span>↓</span>
                        <span classsName={classes.resumeIconWrapper}><a href="https://documentcloud.adobe.com/link/file/?x_api_client_id=shared_recipient&x_api_client_location=review_homebutton&uri=urn%3Aaaid%3Asc%3AUS%3A7e73f377-4384-447e-b15a-c76f1555b166&filetype=application%2Fpdf&size=800789"><DescriptionIcon className={classes.resumeIcon}/></a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;