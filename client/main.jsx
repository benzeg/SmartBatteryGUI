import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import CommercialUsesForm from './components/CommercialUsesForm.jsx';
import BatteryDesignForm from './components/BatteryDesignForm.jsx';
import SolarCsvForm from './components/SolarCsvForm.jsx';
import ConsumptionCsvForm from './components/ConsumptionCsvForm.jsx';
import ElectricRateCsvForm from './components/ElectricRateCsvForm.jsx';
import Report from './components/Report.jsx';
import CapexForm from './components/CapexForm.jsx';
import OpexForm from './components/OpexForm.jsx';
import { Breadcrumb } from 'react-bootstrap';

const formPages = {
	list: [
		'/',
		'/CommercialUsesForm',
		'/BatteryDesignForm',
		'/CapexForm',
		'/OpexForm',
		'/SolarCsvForm',
		'/ConsumptionCsvForm',
		'/ElectricRateCsvForm',
		'/Report'],
	parseTitle: function(path) { return path.replace(/\//g, '').replace(/Csv/g, '').replace(/Form/g, '').replace(/[a-z](?=[A-Z])/g, '$& ')} 	
};

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//session store to keep form data, removed on browser close
		const store = window.sessionStorage;
		store.setItem('form-data',  new Map());
	}

	render() {
		return (
			<div id="main">
				<h1>Smart Battery GUI</h1>
				<Breadcrumb id="nav">
					{formPages.list.map((d, index)=>
						<Breadcrumb.Item key={index} href={`#${d}`} active={window.location.hash === `#${d}`}>
							{formPages.parseTitle(d)}
						</Breadcrumb.Item>
					)}
				</Breadcrumb>
				<div>
					<Route exact path="/" component={()=><Redirect to="/CommercialUsesForm"/>} />
					<Route path="/CommercialUsesForm" component={CommercialUsesForm} />
					<Route path="/BatteryDesignForm" component={BatteryDesignForm} />
					<Route path="/CapexForm" component={CapexForm} />
					<Route path="/OpexForm" component={OpexForm} />
					<Route path="/SolarCsvForm" component={SolarCsvForm} />
					<Route path="/ConsumptionCsvForm" component={ConsumptionCsvForm} />
					<Route path="/ElectricRateCsvForm" component={ElectricRateCsvForm} />
					<Route path="/Report" component={Report} />
				</div>
			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', function() {
	const app = document.createElement('div');
    app.setAttribute('id', 'app');
    document.body.insertAdjacentElement('afterbegin', app);
	render( <HashRouter><Main/></HashRouter>, app);
}); 