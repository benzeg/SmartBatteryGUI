import React from 'react';
import NavLink from './NavLink.jsx';

class BatteryDesignForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      capacity: null,
      cRatioCharge: null,
      cRatioDischarge: null,
      roundtripEfc: null,
      degradation: null,
      price:null,
    }
	}

	handleSubmit(event) {
    event.preventDefault();
    const path = "/CapexForm";
    const batterydesign = Object.assign(this.state);
    for (var key in batterydesign) {
      if (batterydesign[key] === null) {
        batterydesign[key] = 0;
      }
    }
    window.batterydesign = batterydesign;
    this.props.history.push(path);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: target.value});
  }

  render() {
    return (
      <div>
        <h2>Battery Design</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <li><label>
                Capacity (kWh)
                <input name="capacity" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
              <li><label>
                C-ratio charge
                <input name="cRatioCharge" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
                <li><label>
                C-ratio discharge
                <input name="cRatioDischarge" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
                <li><label>
                Roundtrip efficiency (%)
                <input name="roundtripEfc" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
                <li><label>
                Degradation (% per cycle)
                <input name="degradation" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
                <li><label>
                Price per kWh
                <input name="price" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
              <button type="submit">Next</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default BatteryDesignForm;