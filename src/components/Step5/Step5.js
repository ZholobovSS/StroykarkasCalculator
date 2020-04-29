import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '../../redux/actions'
import useStyles from '../../customHooks/useStyles'
import usePrice from '../../customHooks/usePrice'
import UserInfo from '../UserInfo/UserInfo'
import SendConfig from '../SendConfig/SendConfig'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Hidden from '@material-ui/core/Hidden'
import MobileStepper from '@material-ui/core/MobileStepper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText';


import StepImg from '../StepImg/StepImg'
import StepBar from '../StepBar/StepBar'
import StepButton from '../StepButton/StepButton'

import HouseConfig from '../HouseConfig/HouseConfig'


const Step5 = ( { house, form, step, CState } ) => {

    const classes = useStyles()
    const price = usePrice(house);    



    return (
        <React.Fragment>
        <Container className={classes.container} maxWidth="md" >
            <Grid className={classes.grid} container direction="column" justify="center" alignItems="center">

                <Grid container item justify="center" >
                    <Grid item md={12} sm={9} xs={12} >
                        <h1>{ `Шаг ${step.currentState}: ${step.values[step.currentState - 1]}` }</h1>
                    </Grid>
                </Grid>

                <Grid item container direction="row" justify="center" spacing={3}>
                    <Grid item container md={6} sm={9} xs={12} >
                        <HouseConfig classes={classes} house={house} price={price} />
                    </Grid> 

                    <Grid item container md={6} sm={9} xs={12} >
                        <Card className={classes.card}>
                            <Box display="flex" flexDirection="column" height={1} >
                            <CardContent className={classes.cardContent}>
                                <div className={classes.section}>
                                    <h3 className={classes.subtitle}> Укажите Ваши контактные данные: </h3>
                                    <form className={classes.form} noValidate autoComplete="off">
                                        
                                        <UserInfo form={form} CState={CState} />
                                       
                                        <FormControl required error={!form.formState.agree} component="fieldset" className={classes.formControl}>
                                            <FormGroup>
                                                    <FormControlLabel className={classes.formLabel}
                                                        control={<Checkbox checked={form.formState.agree === 1} onChange={e => CState.changeAgree(+e.target.checked)}  name="agree" />}
                                                        label="Согласие на обработку персональных данных"
                                                    />
                                                </FormGroup>
                                                { !form.formState.agree ? <FormHelperText>Отсутствует согласие на обработку персональных данных</FormHelperText> : null }
                                            </FormControl>
                                    </form>
                                   
                                </div>
                            </CardContent>
                            <Box mt="auto">
                            <Grid container item className={classes.printButtonWr} justify="center" >
                                
                                <SendConfig CState={CState} house={house} form={form} price={price} />
                                
                            </Grid>
                            </Box>
                            </Box>
                        </Card>
                    </Grid>    
                </Grid>    
            </Grid>

            <Grid  container className={classes.stepper} justify="center">
                <Hidden xsDown>
                <Grid item container sm={9} md={12} xs={12} >
                    <Card className={classes.card}>
                        <Stepper  activeStep={step.currentState - 1} alternativeLabel>
                            {step.values.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Card>
                </Grid>
                </Hidden>

                <Hidden smUp>
                
                    <Card className={classes.card}>
                    <MobileStepper
                            className={classes.mobileStepper}
                          variant="dots"
                          steps={step.values.length}
                          position="static"
                          activeStep={step.currentState - 1}
                          nextButton={
                                <StepButton 
                                    className={classes.stepButtonsMobile}
                                    direction="next"
                                    title='Вперед'
                                    changeState={ CState.changeNextStep }
                                    step={step.currentState} 
                                    disabled={ true }
                                />
                          }
                          backButton={
                                <StepButton 
                                    className={classes.stepButtonsMobile}
                                    direction="previous"
                                    title='Назад'
                                    step={step.currentState}
                                    changeState={ CState.changePreviousStep }
                                    disabled={ step.currentState === 1 } 
                                />
                          }
                    />
                    </Card>
                </Hidden>
            </Grid>

            <Hidden xsDown>
                <Grid  className={classes.footer}  container  justify="center">
                    <Grid item container md={12} sm={9} xs={12} direction="row" justify="flex-end" >
                        <StepButton 
                            className={classes.stepButtons}
                            direction="previous"
                            title="Предыдущий шаг"
                            step={step.currentState}
                            changeState={ CState.changePreviousStep }
                            disabled={ step.currentState === 1 } 
                        />
                        <StepButton 
                            className={classes.stepButtons}
                            direction="next"
                            title="Следующий шаг"
                            changeState={ CState.changeNextStep }
                            step={step.currentState} 
                            disabled={ true }
                        />
                    </Grid>
                </Grid>
            </Hidden>
        </Container>

        <StepBar price={price} />
        
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    CState: {

        changeNextStep: step => dispatch( ACTIONS.setNextStep(step) ),
        changePreviousStep: step => dispatch( ACTIONS.setPreviousStep(step) ),
        changeUserInfo: (userInfo, info) => dispatch(ACTIONS.setUserInfo(userInfo, info)),
        changeAgree: check => dispatch(ACTIONS.setAgree(check)),
        changeSending: sending => dispatch(ACTIONS.setSending(sending)),
        changeSendForm: formBody => dispatch(ACTIONS.sendForm(formBody)),
        changeFormStatus: (open, type, text) => dispatch(ACTIONS.setFormStatus(open, type, text))
    }
})

const mapStateToProps = state => ({
    step: state.step,
    house: state.house,
    form: state.form
})

export default connect (mapStateToProps, mapDispatchToProps)(Step5)