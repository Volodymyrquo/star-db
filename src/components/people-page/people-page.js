import React, { Component } from "react"
import ItemList from "../item-list"
import ItemDetails from "../item-details"
import ErrorBoundry from "../error-boundry"
import Row from "../row/row"

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
    const personDetails = <ItemDetails personId={this.state.selectedPerson} />

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}
