import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../../customHooks/useStyles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SendConfig = ({house, form, price, CState}) => {

    const classes = useStyles();

    const ENDPOINT = 'http://stanisbu.beget.tech/wp-json/contact-form-7/v1/contact-forms/1200/feedback'
    const sendConfig = () => {

        let bodyFormData = new FormData()

        bodyFormData.set( 'your-name', form.userInfo.userName.value );
        bodyFormData.set( 'your-tel', form.userInfo.userPhone.value );
        bodyFormData.set( 'size', `${house.step1.homeLength} x ${house.step1.homeWidth} x ${house.step1.homeHeight}` );
        bodyFormData.set( 'person', !!form.agree );
        bodyFormData.set( 'floors', house.step1.countFloors );
        bodyFormData.set( 'mansard', (house.step1.mansard ? 'да' : 'нет') );
        bodyFormData.set( 'interior', Object.entries(house.step2).filter(el => el[1].value)[0][1].rusName );
        bodyFormData.set( 'exterior', Object.entries(house.step3).filter(el => el[1].value)[0][1].rusName );
        bodyFormData.set( 'roof-geometry', house.step4.roofGeometry );
        bodyFormData.set( 'roof-material', Object.entries(house.step4.roofMaterial).filter(el => el[1].value)[0][1].rusName );
        bodyFormData.set( 'price', `${Math.ceil(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.` );

        CState.changeSendForm(bodyFormData);
    }

    const handleClose = (event, reason) => {
        CState.changeFormStatus(false,'success','')
    }
        

    return (
        <React.Fragment>

            { form.formState.sendStatus.type === 'success' ? <Redirect to={`/calculator/success/`} /> : null }

            <Backdrop className={classes.backdrop} open={form.formState.sending} onClick={handleClose}>
                <CircularProgress color="secondary" />
            </Backdrop>
            
            <Snackbar open={form.formState.sendStatus.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={form.formState.sendStatus.type}>
                    {form.formState.sendStatus.text}
                </Alert>
            </Snackbar> 
            

            <Button 
                color="secondary" 
                variant="contained" 
                onClick={() => sendConfig()}
                disabled={!form.formState.agree || !(Object.values(form.userInfo).filter(el => el.valid).length === Object.values(form.userInfo).length )} 
                > 
                    Отправить заявку 
            </Button>
        </React.Fragment>
    )
} 

export default SendConfig