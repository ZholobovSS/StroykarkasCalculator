import React from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import useStyles from '../../customHooks/useStyles'


const StepImg = ({pathToImg, title}) => {

    const classes = useStyles();

    return (
        
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={pathToImg}
                    title={title}
                />
            </Card>
        
    )
}


export default StepImg