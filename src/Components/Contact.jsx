import React from 'react';
import {makeStyles} from '@material-ui/core';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import emailjs from 'emailjs-com';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    contact:{
        margin:'5vh auto',
        display: 'flex',
        flexFlow: 'column wrap',
        paddingTop: '8vh'
    },
    title:{
        fontSize: 'calc(1rem + 1vmin)', opacity: '0', rotateX: '-90deg', animation: '$showup 0.7s ease-out 0.5s forwards'
    },
    '@keyframes showup':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    contactWrapper:{
        display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'
    },
    email:{
        display:'flex',
        flexDirection: 'column', 
        margin: '10px auto',
        textAlign: 'center'      
    },
    form:{
        minWidth: '100%'
    },
    formgroup:{
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        opacity: '0', rotateX: '-90deg', animation: '$showup-careerLink 0.7s ease-out 0.65s forwards',
    },
    label:{
        textAlign: 'left',
        margin: '5px 0'
    },
    input:{
        width: '300px',
        height: '30px',
        marginBottom: '5px',
        paddingLeft: '5px',
        borderRadius: '5px',      
    },
    textarea: {
        minHeight:'100px',
        maxHeight: '150px',
        marginBottom: '15px',
        padding: '5px',
        width: '300px',
        borderRadius: '5px'
    },
    btn:{
        margin:'10px auto',
        paddingTop: '5px',
        fontSize: '20px',
        height: '35px',
        lineHeight:'4vh',
        width: '60px',
        fontFamily: 'Josefin Slab, serif',
        fontWeight: 700,
        borderRadius: '5px',
        transitionDuration: '0.6s',
        '&:hover':{backgroundColor:'#F4e25B'},
        opacity: '0', rotateX: '-90deg', animation: '$showup-careerLink 0.7s ease-out 0.65s forwards'
    },
    icons:{
        display:'flex',
        flexDirection: 'column', 
        margin: '30px auto auto auto',
        justifyItems: 'space-between'
    },
    '@global':{
        '.MuiIconButton-root':{ margin: 'auto',},
        '.MuiSvgIcon-root':{fill:'#8256AF'}
    },
    iconButton:{
        opacity: '0', rotateX: '-90deg', animation: '$showup-careerLink 0.7s ease-out 0.65s forwards',
    },
    '@keyframes showup-careerLink':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },    
    icon:{
        transitionDuration: '0.6s',
        '&:hover':{fill:'#F4e25B'}
    },
    iconLink:{
        color: '#8256AF',
        fontWeight: '900',
        textDecoration: 'none',
        fontFamily: 'Josefin Slab, serif',
        fontSize: '1.2rem',        
        
    },
    iconText:{transitionDuration: '1s',
        '&:hover':{color:'#F4e25B'}
    }
})

function Contact(){
    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_1uscbkp', e.target, 'user_acxrY5eiCbEwaTKG8uSDa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return(
        <div className={classes.contact}>
            <p className={classes.title}>Contact</p>
            <div className={classes.contactWrapper}>
                <div className={classes.email}>
                    <Form className={classes.form} onSubmit={sendEmail}>      
                        <FormGroup className={classes.formgroup}>
                            <Label className={classes.label}>Name</Label>
                            <Input className={classes.input} type="name" name="name" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup className={classes.formgroup}>
                            <Label  className={classes.label} for="exampleEmail">Email</Label>
                            <Input className={classes.input} type="email" name="email" id="exampleEmail" placeholder="xxxx@yyy.com" />
                        </FormGroup>
                        <FormGroup className={classes.formgroup}>
                            <Label  className={classes.label} for="exampleEmail">Subject</Label>
                            <Input className={classes.input}  type="subject" name="subject" id="exampleEmail"/>
                        </FormGroup>
                        <FormGroup className={classes.formgroup}>
                            <Label  className={classes.label} for="exampleText">Your message</Label>
                            <Input className={classes.textarea}  type="textarea" name="message" id="exampleText" />
                        </FormGroup>
                        <Button className={classes.btn} type="submit" value="Send"><EmailIcon/></Button>
                    </Form>
                </div>
                <div className={classes.icons}>
                    <IconButton className={classes.iconButton}>
                        <a className={classes.iconLink} href="https://github.com/mobara121"><GitHubIcon className={classes.icon}/><div className={classes.iconText}>https://github.com/mobara121</div></a>
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                        <a className={classes.iconLink}  href="https://www.linkedin.com/in/mizueobara/"><LinkedinIcon className={classes.icon}/><div className={classes.iconText}>https://www.linkedin.com/in/mizueobara/</div></a>
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                        <a className={classes.iconLink}  href="https://www.linkedin.com/in/mizueobara/"><EmailIcon className={classes.icon}/><div className={classes.iconText}>mizueo121@gmail.com</div></a>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Contact;