import React, { Component } from 'react'

import axios from 'axios'

class Planets extends Component {
  constructor (props) {
    super(props)
    this.state = {
      planets: [],
    }

    axios.get('https://swapi.dev/api/planets')
    .then(res => {
       this.setState({planets: res.data.results})
    })
    .catch(err =>
      console.log(err)
    )
  }

  render () {
    return (
      <div className='container'>
        <ul>
        {this.state.planets ? this.state.planets.map(planet => {
            return(
            <li>
                <h1>{planet.name}</h1>
                 <p>rotation_period {planet.rotation_period}</p>
                 <p>orbital period {planet.orbital_period}</p>diameter
                 <p>diameter {planet.diameter}</p>
                 <p>climate {planet.climate}</p>
                 <p>gravity {planet.gravity}</p>
                 <p>terrain:  {planet.terrain}</p>
                 <p>terrain:  {planet.terrain}</p>
                 <p>surface_water:  {planet.surface_water}</p>
                 <p>population:  {planet.population}</p>
            </li>
            )
        }) : ''}
        </ul>
      </div>
    )
  }
}


export default Planets