import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
	state = {
		characters: []
	}

	removeCharacter = (index) => {
		// a shorthand to create a variable which will contain this.state.characters
		// Equivalent to: const characters = this.state.characters
		const { characters } = this.state;

		// replace 'characters' of the state
		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		})
	}

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character]})
	}

	render() {
		return (
			<div className='container'>
				<h1>React Tutorial</h1>
				<p>Add a character with a name and a job to the table.</p>
				<h2>Database</h2>
				<Table characterData={ this.state.characters } removeCharacter={ this.removeCharacter }/>
				<h2>Add New</h2>
				<Form handleSubmit={ this.handleSubmit }/>
			</div>
		)
	}
}

export default App