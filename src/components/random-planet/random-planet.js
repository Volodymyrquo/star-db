import React, { Component } from "react"
import SwapiService from "../../services/swapi-service"
import { ErrorIndicator } from "../error-indicator"
import Spinner from "../spinner"
import "./random-planet.css"

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()
  state = {
    planet: {},
    isLoading: true,
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  onPlanetLoaded = (planet) => {
    this.setState({ planet, isLoading: false, error: false })
  }
  onError = (err) => {
    this.setState({
      error: true,
      isLoading: false,
    })
  }
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }
  render() {
    const { isLoading, error } = this.state
    const hasData = !(isLoading || error)
    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = isLoading ? <Spinner /> : null
    const content = hasData ? <PlanetView {...this.state.planet} /> : null

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({ id, population, rotationPeriod, diameter, name }) => {
  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}
