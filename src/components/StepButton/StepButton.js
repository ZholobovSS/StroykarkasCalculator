import React from 'react'
import { Link, NavLink } from "react-router-dom"

import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useButtons = (direction, step) => {
    let button = {}

    if ( direction === 'next' ) {
        button = {
            icon: {
                endIcon: <KeyboardArrowRight />,
            },
            title: 'Следующий шаг',
            newStep: step + 1,
        }
    } else {
        button = {
            icon: {
                startIcon: <KeyboardArrowLeft />,
            },
            title: 'Предыдущий шаг',
            newStep: step - 1,
        }
    }

    return button
}


const StepButton = ( {disabled = true, className, direction = 'previos', title = '', step = 1, changeState} ) => {

    const button = useButtons(direction, step)

    return (
        <Link onClick={ e => disabled ? e.preventDefault() : changeState(button.newStep)} to={`/calculator/step${button.newStep}/`} >
            <Button 
                className={className}
                { ...button.icon }
                color="primary" 
                variant="contained" 
                disabled={disabled} 
            >

                {title}

            </Button> 
        </Link>
    )
}

export default StepButton