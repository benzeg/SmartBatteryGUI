import React from 'react';
import ReportChart from './Chart.jsx';

class Report extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    reportChart();
  }
  
  render() {
    return (
      <div>
        <h2>Report</h2>
        <div id="reportchart">
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default Report;