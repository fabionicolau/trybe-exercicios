import React, { Component } from "react";

class Pokemons extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props
    return (
      <div className="cards-container">
        <ul className="cards-UL">
          <li className="cards">{name}</li>
          <li className="cards">{type}</li>
          <li className="cards">Average weight: {averageWeight.value}{averageWeight.measurementUnit}</li>
        </ul>
        <div className="image-container">
          <img className="image" src={image} alt={name} />
        </div>
      </div>
    )
  }
}

export default Pokemons