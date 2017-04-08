import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';

document.addEventListener('DOMContentLoaded', function() {
	render(
		<App />,
		document.getElementById('App'));
});