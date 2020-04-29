import React from 'react'

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
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Button from '@material-ui/core/Button'
import image from '../../img/HouseConfig/logo.png'

const HouseConfig = ({house, price, classes}) => {

    const generatePdf = () => {
        window.scrollTo(0,0);
        html2canvas(document.querySelector(`.${classes.forPrint}`)).then( canvas => {
            const img = canvas.toDataURL('image/png');
            const doc = new jsPDF({
                            orientation: 'p',
                            unit: 'mm',
                            format: 'a4',
                        });
            
            let width = 190
            let Ratio = canvas.width / canvas.height
            let height = Math.floor(width / Ratio)

            if (height > 270) {
                height = 270; 
                width = Math.floor( height * Ratio );
            }

            doc.addImage(img, 'PNG', 10, 10, width, height);
            doc.save('yourHouse.pdf');
        }); 
    }

    return (
        <Card className={`${classes.card}`}>
            <CardContent className={`${classes.cardContent} ${classes.forPrint}`}>

                <div className={classes.section}>
                    <h3 className={classes.subtitle}> Конфигурация Вашего проекта: </h3>

                    <Box pl={2} py={2} >

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Размеры дома: </span>{`${house.step1.homeLength} x ${house.step1.homeWidth} x ${house.step1.homeHeight}`}
                        </Typography>

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Количество этажей: </span>{`${house.step1.countFloors}`}
                        </Typography>

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Мансарда: </span>{`${house.step1.mansard ? 'да' : 'нет'}`}
                        </Typography>

                    </Box>

                    <Divider variant='middle' />

                    <Box pl={2} py={2} >

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Материал для интерьера: </span>{`${Object.entries(house.step2).filter(el => el[1].value)[0][1].rusName}`}
                        </Typography>

                    </Box>

                    <Divider variant='middle' />

                    <Box pl={2} py={2} >

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Материал для экстерьера: </span>{`${Object.entries(house.step3).filter(el => el[1].value)[0][1].rusName}`}
                        </Typography>

                    </Box>

                    <Divider variant='middle' />

                    <Box pl={2} py={2} >

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Количество скатов крыши: </span>{`${house.step4.roofGeometry}`}
                        </Typography>

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Материал кровли: </span>{`${Object.entries(house.step4.roofMaterial).filter(el => el[1].value)[0][1].rusName}`}
                        </Typography>

                    </Box>

                    <Divider variant='middle' />

                    <Box pl={2} py={2} >

                        <Typography component="p" gutterBottom>
                            <span className={classes.textSecondary}>Цена: </span>{`${Math.ceil(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб. (предварительная)`}
                        </Typography>

                    </Box>

                    <img className={classes.watermarkLogo} src={image} alt='Конфигурация дома' />

                </div>

            </CardContent>

            <Grid container className={classes.printButtonWr} justify="center" >
                <Button color="secondary" variant="contained" onClick={() => {generatePdf()}} > Сохранить </Button>
            </Grid>

        </Card>
    ) 
}

export default HouseConfig