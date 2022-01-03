import React, { Component } from "react"
import Header from "../header"
import RandomPlanet from "../random-planet"
import ItemDetails, { Record } from "../item-details"
import SwapiService from "../../services/swapi-service"
import "./app.css"
import { ErrorIndicator } from "../error-indicator"
import Row from "../row"

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
    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    )
    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    )
  }
}
