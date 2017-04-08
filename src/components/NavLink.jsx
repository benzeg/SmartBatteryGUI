import React from 'react';
import { Link } from 'react-router-dom';

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (<Link {...this.props}/>)
	}
}

export default NavLink;