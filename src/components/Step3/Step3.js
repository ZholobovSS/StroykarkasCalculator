import React, {useEffect} from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Hidden from '@material-ui/core/Hidden'
import MobileStepper from '@material-ui/core/MobileStepper'

import * as ACTIONS from '../../redux/actions'
import { connect } from 'react-redux'

import image from '../../img/Step3/img.jpg'
import StepImg from '../StepImg/StepImg'
import StepBar from '../StepBar/StepBar'

import usePrice from '../../customHooks/usePrice'
import useStyles from '../../customHooks/useStyles'
import StepButton from '../StepButton/StepButton'


const Step2 = ({house, step, CState}) => {

    const classes = useStyles();

    const price = usePrice(house);

    useEffect( () => {
        CState.changePrice(price);
    },
    [price,CState]);

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

                        <Hidden smDown>
                            <Grid container item xs={6}>
                                <StepImg pathToImg={image} title={`Шаг ${step.currentState}`} />
                            </Grid>
                        </Hidden>

                        <Grid item container md={6} sm={9} xs={12} direction="row">
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Box display="flex" flexDirection="column" className={classes.section}>
                                        <h3 className={classes.subtitle}>Материал для внешней отделки: </h3>

                                        <FormControl component="fieldset" className={classes.formControl}>
                                                <RadioGroup aria-label="position" name="position" defaultValue="1">
                                                { Object.keys(house.step3).map( el => <FormControlLabel
                                                        key = {house.step3[el].name}
                                                        checked={house.step3[el].value === 1}
                                                        value={house.step3[el].name}
                                                        control={<Radio />}
                                                        label={house.step3[el].rusName}
                                                        onChange={e => CState.changeExterior(house.step3, house.step3[el])}
                                                        labelPlacement="end"
                                                    /> ) }
                                              </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </CardContent>
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
                                disabled={ !Object.values(house.step3).filter( el => el.value ).length }
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
                            disabled={ !Object.values(house.step3).filter( el => el.value ).length }
                        />
                    </Grid>
                </Grid>
            </Hidden>
            </Container>

            <StepBar price={price} />

        </React.Fragment>
)}

                         
                    

const mapDispatchToProps = dispatch => ({

    CState: {
        changeExterior: (exterior, type) => dispatch(ACTIONS.setExterior(exterior, type)),
        changePrice: newPrice => dispatch(ACTIONS.setNewPrice(newPrice)),

        changeNextStep: step => dispatch( ACTIONS.setNextStep(step) ),
        changePreviousStep: step => dispatch( ACTIONS.setPreviousStep(step) ),
    }
    
})

const mapStateToProps = state => ({
    step: state.step,
    house: state.house
})

export default connect(mapStateToProps, mapDispatchToProps)(Step2)