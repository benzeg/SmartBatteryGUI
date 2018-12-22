import React from 'react';
import update from 'immutability-helper';

class CapexForm extends React.Component {
	constructor(props) {
    super(props);
    const initialState = {
      solarmodule: 0,
      inverter: 0,
      mounting: 0,
      development: 0,
      battery: 0,
      solarTotal: 0,
      total: 0
    };

    const session = window.sessionStorage.getItem('form-data-Capex');
    if(session) Object.assign(initialState, JSON.parse(session));
    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

	handleSubmit(event) {
    event.preventDefault();
    const path = "#/OpexForm";
    const formData = Object.assign(this.state);
    window.sessionStorage.setItem('form-data-Capex', JSON.stringify(formData));
    window.location.assign( window.location.href.replace(/#.*/g, path) );
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    if(name === 'battery') {
      this.setState(
        update(this.state, {
          [name]: {$set: target.value },
          total: {$set:  this.state.total - (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))}
        })
      );
    } else {
      this.setState(
        update(this.state, {
          [name]: {$set: target.value},
          solarTotal: {$set: this.state.solarTotal - (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))},
          total:  {$set: this.state.total - (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))}
        })
      )
    }
  }

  render() {
    return (
      <div>
        <h2>CAPEX</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Solar Module ($/W .30)
                <br />
              <input name="solarmodule" type="number" defaultValue={this.state["solarmodule"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Inverter ($/W .05)
                <br />
              <input name="inverter" type="number" defaultValue={this.state["inverter"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Mounting
              <br />
              <input name="mounting" type="number" defaultValue={this.state["mounting"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Development
              <br />
              <input name="development" type="number" defaultValue={this.state["development"] || ''}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Battery (wrap)
                <br />
              <input name="battery" type="number" defaultValue={this.state["battery"] || ''}
                onChange={this.handleInputChange} />
            </label>
          </fieldset>
          <fieldset>
            <p>Solar Total: {this.state["solarTotal"]}</p>
            <p>Capex Total: {this.state.total}</p>
            <button type="submit">Next</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default CapexForm;