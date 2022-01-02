import React, { Component } from "react"
import Header from "../header"
import RandomPlanet from "../random-planet"
import ItemList from "../item-list"
import PersonDetails from "../item-details"
import SwapiService from "../../services/swapi-service"

import "./app.css"
import { ErrorIndicator } from "../error-indicator"
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
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage getData={this.swapiService.getAllPeople} />
      </div>
    )
  }
}
