import React, { PropTypes, Component } from 'react';
import styles from './IdeaStream.css';

class IdeaStream extends Component {
	static propTypes = {}
	render() {
		const { ideaText, show } = this.props;
		return (
			<div className={styles.ideaStream}>
				<h1>Public</h1>
				<p>{ideaText}</p>

			</div>
		)
	}
}
module.exports = IdeaStream;
