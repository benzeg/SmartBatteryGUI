import React from 'react';
import NavLink from './components/NavLink.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Microgrid Optimization</h1>
				<ul role="nav">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/form">Form</NavLink></li>
				</ul>
			</div>
			)
	}
}

export default App;