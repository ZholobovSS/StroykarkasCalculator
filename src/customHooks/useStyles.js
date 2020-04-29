import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(10),
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    '& a': {
      textDecoration: 'none',
    }
  },
  watermarkLogo: {
    position: 'absolute',
    top: -theme.spacing(1),
    opacity: .15,
    zIndex: 0,
    right: -theme.spacing(2),
    maxWidth: 200,
  },
  forPrint: {
    position: 'relative',
    zIndex: 100,
  },
  printButtonWr: {
    paddingBottom: theme.spacing(3),
  },
  grid: {
    
  },
  title: {
    textAlign: 'center'
  },
  textSecondary: {
    color: '#555555',
  },
  subtitle: {
    color: '#555555',
    fontWeight: '400',
    margin: theme.spacing(0, 0, 2),
    fontSize: '1.25rem', 
  },
  legend: {
    color: 'inherit',
    fontWeight: '400',
    fontSize: '1rem', 
  },
  link: {
    '& a': {
        textDecoration: 'none',
        color: 'inherit',
    },
    margin: theme.spacing(1),
  },
  media: {
    width: '100%',
    minHeight: '25rem',
    height: '100%',
  },
  card: {
    width: '100%',
    '& .MuiCardContent-root': {
        padding: theme.spacing(3),
    }
  }, 
  form: {
    paddingTop: theme.spacing(2),
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '12ch'
    },
    '& .MuiFormControl-fullWidth': {
      width: `calc( 100% - ${theme.spacing(2)}px )`,
    }
  },
  formControl: {
    margin: theme.spacing(0, 1),
    '&:first-of-type': {
        marginTop: theme.spacing(1),
    }
  },
  section: {
    position: 'relative',
    zIndex: 200,
    '&:first-of-type': {
        margin: theme.spacing(1, 0, 3),
    },
    '&:only-child': {
        margin: theme.spacing(1, 0),
    },
    margin: theme.spacing(3, 0),
  }, 
  footer: {
    
  },
  backdrop: {
    zIndex: `${theme.zIndex.tooltip + 1} !important` ,
  },
  appBar: {
        background: 'white !important',
        top: 'auto !important',
        bottom: 0,
  }, 
  price: {
    borderRadius: 'unset !important',
    boxShadow: 'none !important',
    padding: '16px 24px !important',
    whiteSpace: 'pre'
  },
  stepper: {
    margin: theme.spacing(4, 0),
    '& .MuiStepper-root ': {
      width: 'auto',
    }
  },
  mobileStepper: {
    flexGrow: 1,
  },
  stepButtons: {
    
    marginLeft: theme.spacing(2),
    
    '& a': {
        textDecoration: 'none',
        color: 'inherit'
    }
  },
  stepButtonsMobile: {
    '& a': {
        textDecoration: 'none',
        color: 'inherit'
    }
  }
}));

export default useStyles;