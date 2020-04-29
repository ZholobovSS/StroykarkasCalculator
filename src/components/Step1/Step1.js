import React, {useEffect} from 'react'

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


import * as ACTIONS from '../../redux/actions'
import { connect } from 'react-redux'


import image from '../../img/Step1/step1.jpg'
import StepImg from '../StepImg/StepImg'
import StepBar from '../StepBar/StepBar'

import useStyles from '../../customHooks/useStyles'
import usePrice from '../../customHooks/usePrice'
import StepButton from '../StepButton/StepButton'

const Step1 = ( {house, step, CState} ) => {

    const classes = useStyles();
    const price = usePrice(house);

    useEffect( () => {
        CState.changePrice(price);
    }, [price, CState]);

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
                                <div className={classes.section}>
                                    <h3 className={classes.subtitle}> Укажите размеры вашего дома: </h3>
                                    <form className={classes.form} noValidate autoComplete="off">
                                        <TextField
                                            required
                                            defaultValue={house.step1.homeLength || ''}
                                            type="number"
                                            error={!house.step1.homeLength}
                                            id="house-length"
                                            label="Длина"
                                            variant="outlined"
                                            onChange={e => CState.changeHomeLenght(+e.target.value)}
                                        />
                                        <TextField
                                            required
                                            defaultValue={house.step1.homeWidth || ''}
                                            type="number"
                                            error={!house.step1.homeWidth}
                                            id="house-width"
                                            label="Ширина"
                                            variant="outlined"
                                            onChange={e => CState.changeHomeWidth(+e.target.value)}
                                        />
                                        <TextField
                                            required
                                            defaultValue={house.step1.homeHeight || ''}
                                            type="number"
                                            error={!house.step1.homeHeight}
                                            id="house-height"
                                            label="Высота"
                                            variant="outlined"
                                            onChange={e => CState.changeHomeHeight(+e.target.value)}
                                        />
                                    </form>
                                </div>
                                <Divider />
                                <Box display="flex" flexDirection="column" className={classes.section}>
                                    <h3 className={classes.subtitle}>Количество этажей: </h3>

                                    <FormControl component="fieldset" className={classes.formControl}>
                                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                                <FormControlLabel
                                                  checked={house.step1.countFloors === 1}
                                                  value="1"
                                                  control={<Radio />}
                                                  label="1"
                                                  onChange={e => CState.changeFloorsCount(+e.target.value)}
                                                  labelPlacement="end"
                                                />
                                                <FormControlLabel
                                                  checked={house.step1.countFloors === 2}
                                                  value="2"
                                                  control={<Radio />}
                                                  label="2"
                                                  onChange={e => CState.changeFloorsCount(+e.target.value)}
                                                  labelPlacement="end"
                                                />
                                          </RadioGroup>
                                    </FormControl>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                            <FormGroup>
                                                <FormControlLabel className={classes.formLabel}
                                                    control={<Checkbox checked={house.step1.mansard === 1} onChange={e => CState.changeMansard(+e.target.checked)}  name="mansarda" />}
                                                    label="Мансарда"
                                                />
                                            </FormGroup>
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
                                disabled={!(house.step1.homeLength && house.step1.homeWidth && house.step1.homeHeight)} 
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
                            disabled={!(house.step1.homeLength && house.step1.homeWidth && house.step1.homeHeight)} 
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
        changeHomeLenght: lenght => dispatch(ACTIONS.setHomeLength(lenght)),
        changeHomeWidth: width => dispatch(ACTIONS.setHomeWidth(width)),
        changeHomeHeight: height => dispatch(ACTIONS.setHomeHeight(height)),
        changeFloorsCount: floors => dispatch(ACTIONS.setFloorsCount(floors)),
        changeMansard: mansard => dispatch(ACTIONS.setMansard(mansard)),

        changeNextStep: step => dispatch( ACTIONS.setNextStep(step) ),
        changePreviousStep: step => dispatch( ACTIONS.setPreviousStep(step) ),
        changePrice: ( newPrice ) => dispatch(ACTIONS.setNewPrice(newPrice)),
    }
    
})

const mapStateToProps = state => ({
    step: state.step,
    house: state.house
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)