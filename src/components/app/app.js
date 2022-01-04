import React, { Component } from "react"
import Header from "../header"
import RandomPlanet from "../random-planet"
import SwapiService from "../../services/swapi-service"
import "./app.css"
import { ErrorIndicator } from "../error-indicator"
import Row from "../row"
import PeoplePage from "../people-page/people-page"

export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}
