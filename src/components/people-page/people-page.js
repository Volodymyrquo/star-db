import React, { Component } from "react"
import ItemList from "../item-list"
import PersonDetails from "../item-details"
import ErrorBoundry from "../error-boundry"
const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  )
}
export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.props.getData}>
        {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
    )
    const personDetails = <PersonDetails personId={this.state.selectedPerson} />

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}
