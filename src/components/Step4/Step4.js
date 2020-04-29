import React, { useEffect } from 'react'

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
import * as ACTIONS from '../../redux/actions'
import { connect } from 'react-redux'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Hidden from '@material-ui/core/Hidden'
import MobileStepper from '@material-ui/core/MobileStepper'

import image from '../../img/Step4/step4.jpg'
import StepImg from '../StepImg/StepImg'
import StepBar from '../StepBar/StepBar'

import useStyles from '../../customHooks/useStyles'
import usePrice from '../../customHooks/usePrice'
import StepButton from '../StepButton/StepButton'


const Step4 = ({house, step, CState}) => {

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
                                <div className={classes.section}>
                                    <h3 className={classes.subtitle}> Укажите количество скатов: </h3>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                                <FormControlLabel
                                                  checked={house.step4.roofGeometry === 1}
                                                  value="1"
                                                  control={<Radio />}
                                                  label="1"
                                                  onChange={e => CState.changeRoofGeometry(+e.target.value)}
                                                  labelPlacement="end"
                                                />
                                                <FormControlLabel
                                                  checked={house.step4.roofGeometry === 2}
                                                  value="2"
                                                  control={<Radio />}
                                                  label="2"
                                                  onChange={e => CState.changeRoofGeometry(+e.target.value)}
                                                  labelPlacement="end"
                                                />
                                                 <FormControlLabel
                                                  checked={house.step4.roofGeometry === 4}
                                                  value="4"
                                                  control={<Radio />}
                                                  label="4"
                                                  onChange={e => CState.changeRoofGeometry(+e.target.value)}
                                                  labelPlacement="end"
                                                />
                                          </RadioGroup>
                                    </FormControl>
                                </div>
                                <Divider />
                                <div className={classes.section}>
                                    <h3 className={classes.subtitle}> Укажите материал кровли: </h3>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                            <RadioGroup aria-label="position" name="position" defaultValue="top">

                                                { Object.keys(house.step4.roofMaterial).map( el => <FormControlLabel
                                                        key = {house.step4.roofMaterial[el].name}
                                                        checked={house.step4.roofMaterial[el].value === 1}
                                                        value={house.step4.roofMaterial[el].name}
                                                        control={<Radio />}
                                                        label={house.step4.roofMaterial[el].rusName}
                                                        onChange={e => CState.changeRoofMaterial(house.step4.roofMaterial, house.step4.roofMaterial[el])}
                                                        labelPlacement="end"
                                                    /> ) }
                                          </RadioGroup>
                                    </FormControl>
                                </div>
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
                                disabled={ !house.step4.roofGeometry || !Object.values(house.step4.roofMaterial).filter(el => el.value).length }
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
                            disabled={ !house.step4.roofGeometry || !Object.values(house.step4.roofMaterial).filter(el => el.value).length }
                        />
                    </Grid>
                </Grid>
            </Hidden>
        </Container>

        <StepBar price={price} />
        
        </React.Fragment>

    )
}

const mapStateToProps = (state) => ({
    step: state.step,
    house: state.house,
})

const mapDispatchToProps = (dispatch) => ({
    CState: {
        changeRoofGeometry: slopes => dispatch(ACTIONS.setRoofGeometry(slopes)),
        changeRoofMaterial: (roofMaterial, material) => dispatch(ACTIONS.setRoofMaterial(roofMaterial, material)),

        changeNextStep: step => dispatch( ACTIONS.setNextStep(step) ),
        changePreviousStep: step => dispatch( ACTIONS.setPreviousStep(step) ),

        changePrice: newPrice => dispatch(ACTIONS.setNewPrice(newPrice)),
    }
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Step4)

