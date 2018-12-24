import React from 'react';
import update from 'immutability-helper';
class ConsumptionCsvForm extends React.Component {
	constructor(props) {
    super(props);
    const initialState = {
      csvFile: null
    }
    const session = window.sessionStorage.getItem('form-data-Consumption');
    if(session) Object.assign(initialState, JSON.parse(session));
    this.state = initialState;
  }

	handleSubmit=(event)=> {
    event.preventDefault();
    const path = "#/ElectricRateCsvForm";
    const formData = Object.assign(this.state);
    window.sessionStorage.setItem('form-data-Consumption', JSON.stringify(formData));
    window.location.assign( window.location.href.replace(/#.*/g, path) );
  }

  handleChange=(event)=> {
    this.setState(
      update(this.state, {
        [event.target.name]: {$set: event.target.files[0]}
      })
    );
  }

  render() {
    return (
      <div>
        <h2>Utilities Consumption</h2>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Energy Consumption 8760:
              <br /><input type="file" defaultValue={this.state["csvFile"] || ''}
                name="csvFile"
                accept=".csv"
                placeholder="file.csv"
                className="inputClass"
                onChange={this.handleChange} /></label>
          </fieldset>
          <fieldset>
            <button type="submit">Next</button>
          </fieldset>
        </form>

      </div>
    )
  }
}

export default ConsumptionCsvForm;
