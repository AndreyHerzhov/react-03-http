import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';
 

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
     
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      Notiflix.Notify.warning("Введите имя покемона.",{
        width: '280px',
        position: 'center-top',
        distance: '10px',
        opacity: 1,
        borderRadius: '5px',
      }) 
      return;
    }

    this.props.onSubmit(this.state.pokemonName)
    
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}