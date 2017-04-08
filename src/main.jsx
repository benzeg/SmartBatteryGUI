import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import Form from './components/Form.jsx';
import Home from './components/Home.jsx';

document.addEventListener('DOMContentLoaded', function() {
	render(
		<BrowserRouter>
			<div>
				<Route path="/" component={App} />
				<Route exact path="/" component={Home} />
				<Route path="/form" component={Form} />
			</div>
		</BrowserRouter>, document.getElementById('App'));
});