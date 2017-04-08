import React from 'react';
import NavLink from './NavLink.jsx';
import FileInput from 'react-file-input';

class ConsumptionCsvForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
    const path = "/ElectricRateCsvForm";
    //pop-up message when no file is selected
    window.consumptioncsv = this.state === null ? "None": this.state.consumptioncsv;
    this.props.history.push(path);
  }

  handleChange(event) {
  	this.setState({consumptioncsv: event.target.files[0]});
  }

  render() {
    return (
      <div>
        <h2>Utility</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Energy Consumption 8760:
              <FileInput name="Energy Consumption 8760"
              					 accept=".csv"
              					 placeholder="file.csv"
              					 className="inputClass"
              					 onChange={this.handleChange.bind(this)} /></label>
              <button type="submit">Next</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default ConsumptionCsvForm;