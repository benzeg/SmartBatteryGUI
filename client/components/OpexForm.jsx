import React from 'react';
import update from 'immutability-helper';

class OpexForm extends React.Component {
	constructor(props) {
		super(props);
    const initialState = {
      solarfieldOM: 0,
      bess: 0,
      total: 0
    };
    const session = window.sessionStorage.getItem('form-data-Opex');
    if(session) Object.assign(initialState, JSON.parse(session));
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
	handleSubmit(event) {
    event.preventDefault();
    const path = "/#/SolarCsvForm";
    const formData = Object.assign(this.state);
    window.sessionStorage.setItem('form-data-Opex', JSON.stringify(formData));
    window.location.assign( window.location.origin + path );
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState(update(this.state, {
      [name]: {$set: target.value},
      total: {$set: this.state.total - (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))}
    }));
  }

  render() {
    return (
      <div>
        <h2>OPEX</h2>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Solar Field O&M $/kW
                <br /><input name="solarfieldOM" type="number" defaultValue={this.state["solarfieldOM"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              BESS $/kWh
                <br /><input name="bess" type="number" defaultValue={this.state["bess"] || ''}
                onChange={this.handleInputChange} />
            </label>
          </fieldset>
          <fieldset>
            <p>Total: {this.state.total}</p>
            <button type="submit">Next</button>
          </fieldset>
        </form>

      </div>
    )
  }
}

export default OpexForm;;