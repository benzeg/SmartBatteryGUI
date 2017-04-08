import React from 'react';
import ReportChart from './Chart.jsx';

class Report extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>{console.log(window.solarcsv)}
        <h2>Report</h2>
        <div id="reportchart">
          <ReportChart />
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default Report;