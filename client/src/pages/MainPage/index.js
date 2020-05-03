import * as React from "react"
import "./MainPage.css"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
