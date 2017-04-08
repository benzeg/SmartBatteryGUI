import React from 'react';
import NavLink from './NavLink.jsx';
import FileInput from 'react-file-input';

class CommercialUsesForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = "/BatteryDesignForm";
    const userChoices = [];
    for(var key in this.state) {
      userChoices.push(key);
    }
    window.commercialuses = userChoices;
    this.props.history.push(path);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checked' ? target.checked: target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleUploadChange(event) {
    window.consumptioncsv = event.target.files[0];
  }

  render() {
    return (
      <div>
        <h2>Commercial Uses</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <li><label>
                <input name="demandCharges" type="checkbox"
                       onChange={this.handleInputChange.bind(this)} />
                Demand charges</label></li>
              <li><label>
                <input name="arbitrage" type="checkbox"
                       onChange={this.handleInputChange.bind(this)} />
                Arbitrage</label></li>
              <li><label>
                <input name="Smoothing" type="checkbox"
                       onChange={this.handleInputChange.bind(this)} />
                Smoothing</label></li>
              <li><label>
                <input name="ancillary" type="checkbox"
                       onChange={this.handleInputChange.bind(this)} />
                Ancillary services</label></li>
              <li><label>Additional grid data: <FileInput name="Additional grid data"
                         accept=".csv"
                         placeholder="file.csv"
                         className="inputClass"
                         onChange={this.handleChange} /></label></li>
              <button type="submit">Next</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default CommercialUsesForm;