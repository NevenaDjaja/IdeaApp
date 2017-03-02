import React, { PropTypes, Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';
import styles from './Navigation.css';

class Navigation extends Component {
	static propTypes = {}
	render() {
		return (
			<Navbar
				inverse
				staticTop
        collapseOnSelect
        className={styles.navigation}
				data-test-id="navigation"
			>
				<Navbar.Header>
					<Navbar.Brand className={styles.brand}>
						<Link to='/' className={styles.logo}>
							IDEASPACE
						</Link>

					</Navbar.Brand>
				</Navbar.Header>

			</Navbar>
		)
	}
}
module.exports = Navigation;
