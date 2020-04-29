import React from 'react'
import Step1 from './components/Step1/Step1'
import Step2 from './components/Step2/Step2'
import Step3 from './components/Step3/Step3'
import Step4 from './components/Step4/Step4'
import Step5 from './components/Step5/Step5'
import Notfound from './components/Notfound/Notfound'
import { connect } from 'react-redux'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

const theme = createMuiTheme({
  palette: {
    secondary: {
      contrastText: "#fff",
      dark: "#B39C7D",
      light: "#F5D3A6",
      main: "rgba(204, 177, 141, 1)",
    },
  }
});


function App({step}) {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Switch>
            <Route exact path="/calculator/step1/">
                <Step1 />
            </Route>
            <Route exact path="/calculator/step2/">
                {step === 2 ? <Step2 /> : <Redirect to={`/calculator/step${step}/`} />}
            </Route>
            <Route exact path="/calculator/step3/">
                {step === 3 ? <Step3 /> : <Redirect to={`/calculator/step${step}/`} />}
            </Route>
            <Route exact path="/calculator/step4/">
                {step === 4 ? <Step4 /> : <Redirect to={`/calculator/step${step}/`} />}
            </Route>
            <Route exact path="/calculator/step5/">
                {step === 5 ? <Step5 /> : <Redirect to={`/calculator/step${step}/`} />}
            </Route>
            <Route exact path="/calculator/">
                <Redirect to={`/calculator/step${step}/`} />
            </Route>
            <Route >
                <Notfound />
            </Route>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}


const mapStateToProps = state => ({
    step: state.step.currentState,
})

export default connect(mapStateToProps)(App);
