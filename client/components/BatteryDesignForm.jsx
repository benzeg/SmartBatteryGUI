import React from 'react';
import update from 'immutability-helper';

class BatteryDesignForm extends React.Component {
	constructor(props) {
    super(props);
    const initialState = {
      capacity: null,
      cRatioCharge: null,
      cRatioDischarge: null,
      roundtripEfc: null,
      degradation: null,
      price: null
    };
    const session = window.sessionStorage.getItem('form-data-BatteryDesign');
    if(session) Object.assign(initialState, JSON.parse(session));
    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

	handleSubmit(event) {
    event.preventDefault();
    const path = "#/CapexForm";
    const formData = Object.assign(this.state);
    for (var key in formData) {
      if (formData[key] === null) {
        formData[key] = 0;
      }
    }
    window.sessionStorage.setItem('form-data-BatteryDesign', JSON.stringify(formData));
    window.location.assign( window.location.href.replace(/#.*/g, path) );
  }

  handleInputChange(event) {
    this.setState(
      update(this.state, {
        [ event.target.name ]: {$set: event.target.value}
      })
    );
  }

  render() {
    return (
      <div>
        <h2>Battery Design</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Capacity (kWh)
                <br/><input name="capacity" type="number" defaultValue={this.state["capacity"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              C-ratio charge;
                <br/><input name="cRatioCharge" type="number" defaultValue={this.state["cRatioCharge"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              C-ratio discharge
                <br/><input name="cRatioDischarge" type="number" defaultValue={this.state["cRatioDischarge"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Roundtrip efficiency (%)
                <br/><input name="roundtripEfc" type="number" defaultValue={this.state["roundtripEfc"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Degradation (% per cycle)
                <br/><input name="degradation" type="number" defaultValue={this.state["degradation"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Price per kWh
                <br/><input name="price" type="number" defaultValue={this.state["price"] || ''}
                onChange={this.handleInputChange} />
            </label>
          </fieldset>
          <fieldset>
            <button type="submit">Next</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default BatteryDesignForm;