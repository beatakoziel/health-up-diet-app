import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { MainPage } from "./containers/MainPage"
import { Receipes } from "./containers/Receipes"
import { Navigation } from "./containers/Navigation"
import { DietPage } from "./containers/DietPage"
import { CalculatorPage } from "./containers/CalculatorPage"
import { ChosenReceipe } from "./containers/ChosenReceipe"
import { Products } from "./containers/Products"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/diety" component={DietPage} />
          <Route exact path="/kalkulator" component={CalculatorPage} />
          <Route exact path="/przepisy" component={Receipes} />
          <Route exact path="/przepisy/:id" component={ChosenReceipe} />
          <Route exact path="/produkty" component={Products} />
        </Switch>
      </Router>
    )
  }
}

export default App
