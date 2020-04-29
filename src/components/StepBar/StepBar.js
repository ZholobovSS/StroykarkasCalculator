import React from 'react'

import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import useStyles from '../../customHooks/useStyles'

import 'odometer/themes/odometer-theme-default.css'
import Odometer from 'react-odometerjs'

const StepBar = ({price}) => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container maxWidth="md" >
                <Grid container  justify="center" >
                    <Grid container md={12} sm={9} xs={12} item direction="row" justify="flex-end" alignItems="center">
                        <Button size="large" className={classes.price} color="secondary" variant="contained">{`Итого: `}  
                            <Odometer
                                format="( ddd)"
                                duration={ 150 }
                                value={ price }
                            /> {` руб.`}
                            </Button>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    )
}

export default StepBar