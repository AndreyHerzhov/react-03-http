import React, { Component } from "react";
 
export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
        error: null,
        status: 'idle'
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.pokemonName !== this.props.pokemonName) {
            console.log('Изменилось имя покемона')
            
            this.setState( {loading: true, pokemon: null })
            
                fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                    .then(res => {
                        if(res.ok) {
                            return res.json()
                        }

                        return Promise.reject(
                            new Error(`Нет такого покемона с именем ${this.props.pokemonName}`)
                        )
                    })
                    .then(pokemon => this.setState({ pokemon }))
                    .catch(error => this.setState({ error }))
                    .finally(() => this.setState({loading: false}))
            
           
        }
    }

    render() {
        const { pokemon, loading, error } = this.state
        const { pokemonName } = this.props

        return  <div>
                    {/* <h1>PokemonInfo</h1> */}
                    {error && <h1>{error.message}</h1>}
                    {loading && <div>Lodaing...</div>}
                    {!pokemonName && <div>Введите имя покемона</div>}
                    {pokemon && (
                        <div>
                            <p>{pokemon.name}</p>
                            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="alt" width='150'/>
                        </div>
                    )}
                </div>
    }
}


