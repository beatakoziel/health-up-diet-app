import * as React from 'react';
import './MainPage.css';
import { Header } from '../../components/Home/Header';
import { Main } from '../../components/Home/Main';
import { Footer } from '../../components/Home/Footer';

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
