import React, { Component } from "react"
import Spinner from "../spinner"

import "./item-list.css"

class ItemList extends Component {
  state = {
    itemsList: null,
  }
  componentDidMount() {
    const { getData } = this.props
    getData().then((itemsList) => this.setState({ itemsList }))
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item
      const label = this.props.children(item)
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      )
    })
  }
  render() {
    const { itemsList } = this.state

    if (!itemsList) {
      return <Spinner />
    }
    const items = this.renderItems(itemsList)
    return <ul className="item-list list-group">{items}</ul>
  }
}

const f = () => {
  return ItemList
}
export default f()
