import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Receipes } from './pages/Receipes';
import { Navigation } from './containers/Navigation';
import { DietPage } from './pages/DietPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ChosenReceipe } from './pages/ChosenReceipe';
import { Products } from './pages/Products';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { AuthorizationContextProvider } from './context';

class App extends React.Component {
  render() {
    return (
      <AuthorizationContextProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/rejestracja' component={SignUp} />
            <Route exact path='/logowanie' component={SignIn} />
            <Route exact path='/diety' component={DietPage} />
            <Route exact path='/kalkulator' component={CalculatorPage} />
            <Route exact path='/przepisy' component={Receipes} />
            <Route exact path='/przepisy/:id' component={ChosenReceipe} />
            <Route exact path='/produkty' component={Products} />
          </Switch>
        </Router>
      </AuthorizationContextProvider>
    );
  }
}

export default App;
