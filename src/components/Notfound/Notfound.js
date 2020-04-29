import React from 'react'
import { connect } from 'react-redux'
import * as CONSTANTS from '../../redux/constants'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

import { Link } from "react-router-dom";
import useStyles from '../../customHooks/useStyles'

import * as ACTIONS from '../../redux/actions'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notfound = ({form, CState}) => {

    const classes = useStyles();
    const handleClose = (event, reason) => {
        CState.changeFormStatus(false, 'success', form.formState.sendStatus.text)
    }

    return (
        <Container className={classes.container} maxWidth="md" >
            <Grid className={classes.grid} container direction="column" justify="center" alignItems="center">

                <Snackbar open={form.formState.sendStatus.open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={form.formState.sendStatus.type}>
                        {form.formState.sendStatus.text}
                    </Alert>
                </Snackbar> 


                <Grid item xs={12}>
                    <h1 className={classes.title}>{ form.formState.sendStatus.text.length ? form.formState.sendStatus.text : 'Запрашиваемая страница не существует' }</h1>
                </Grid>

                <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
                    <Button 
                        className={classes.link} 
                        variant="outlined" 
                        href={CONSTANTS.SITE_ROOT}
                        startIcon={<HomeIcon />}
                        >
                        Сайт
                    </Button>
                    <Button 
                        className={classes.link} 
                        variant="outlined"
                        href="/calculator/"
                        startIcon={<AppsIcon />}
                        >
                       Калькулятор
                    </Button>
                </Grid>
                
            </Grid>
         </Container>
        
    )
}

const mapStateToProps = state => ({
    form: state.form
})

const mapDispatchToProps = dispatch => ({
    
    CState: {
        resetState: () => dispatch(ACTIONS.destroyState()),
        changeFormStatus: (open, type, text) => dispatch(ACTIONS.setFormStatus(open, type, text))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Notfound)
