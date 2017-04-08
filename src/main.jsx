import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import CommercialUsesForm from './components/CommercialUsesForm.jsx';
import BatteryDesignForm from './components/BatteryDesignForm.jsx';
import SolarCsvForm from './components/SolarCsvForm.jsx';
import ConsumptionCsvForm from './components/ConsumptionCsvForm.jsx';
import ElectricRateCsvForm from './components/ElectricRateCsvForm.jsx';
import Report from './components/Report.jsx';
import CapexForm from './components/CapexForm.jsx';
import OpexForm from './components/OpexForm.jsx';


document.addEventListener('DOMContentLoaded', function() {
	render(
		<BrowserRouter>
			<div>
				<Route path="/" component={App} />
				<Route exact path="/" component={Home} />
				<Route path="/CommercialUsesForm" component={CommercialUsesForm} />
				<Route path="/BatteryDesignForm" component={BatteryDesignForm} />
				<Route path="/CapexForm" component={CapexForm} />
				<Route path="/OpexForm" component={OpexForm} />
				<Route path="/SolarCsvForm" component={SolarCsvForm} />
				<Route path="/ConsumptionCsvForm"  component={ConsumptionCsvForm} />
				<Route path="/ElectricRateCsvForm" component={ElectricRateCsvForm} />
				<Route path="/Report" component={Report} />
			</div>
		</BrowserRouter>, document.getElementById('App'));
});