import React, { PropTypes, Component } from 'react';
import styles from './Ideas.css';
import IdeaForm from 'IdeaForm';
import IdeaStream from 'IdeaStream';

class Ideas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			show: false
		}
		this.ideaText = '';
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.ideaText = e.target.value;
	}

	handleSubmit(e) {
		this.setState({ text: this.ideaText });
	}

	render() {
		return (
			<div className={styles.ideas}>
				<h3>A place for you to share your ideas</h3>
				<IdeaForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				<IdeaStream ideaText={this.state.text}/>
			</div>
		);
	}
}
module.exports = Ideas;
