import React, {Component} from "react";
import PokemonInfo from "./Pokemon/PokemonInfo"; 
import PokemonForm from "./Pokemon/PokemonForm";

export default class App extends Component {
  state = {
    pokemonName: ''
  }

  handleFormSubmit = pokemonName => {
    this.setState({pokemonName: pokemonName})
  }
   

  render() {
 
    return(
      <div style={{ maxwidth: 1170, margin: '0 auto', padding: 20  }}>
       <PokemonForm onSubmit={this.handleFormSubmit}/>
      <PokemonInfo pokemonName={this.state.pokemonName}/>
      </div>
    )
  }
}