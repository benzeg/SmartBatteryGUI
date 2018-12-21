import React from 'react';
import update from 'immutability-helper';

class ElectricRateCsvForm extends React.Component {
	constructor(props) {
    super(props);
    const initialState = { 
      csvFile: null
    }
    const session = window.sessionStorage.getItem('form-data-ElectricRate');
    if(session) Object.assign(initialState, JSON.parse(session));
    this.state = initialState;
	}

	handleSubmit=(event)=> {
    event.preventDefault();
    const path = "/#/Report";
    const formData = Object.assign(this.state);
    window.sessionStorage.setItem('form-data-ElectricRate', JSON.stringify(formData));
    window.location.assign( window.location.origin + path );
  }

  handleChange=(event)=> {
    this.setState(
      update(this.state, {
        [event.target.name]: {$set: event.target.files[0]}
      })
    )
  }

  render() {
    return (
      <div>
        <h2>Utility</h2>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Electricity Rate:
              <br /><input type="file" defaultValue={this.state["csvFile"] || ''}
                name="Electricity Rate"
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

export default ElectricRateCsvForm;