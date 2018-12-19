import React from 'react';
import NavLink from './NavLink.jsx';

class OpexForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      solarfieldOM: 0,
      bess: 0,
      total: 0
    }
	}

	handleSubmit(event) {
    event.preventDefault();
    const path = "/SolarCsvForm";
    window.opex = Object.assign(this.state);
    this.props.history.push(path);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    var sum = 0;
    this.setState({[name]: target.value, total: this.state.total - 
      (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))});
  }

  render() {
    return (
      <div>
        <h2>CAPEX</h2>
        <ul>
          <li>
            <form>
              <li><label>
                Solar Field O&M $/kW
                <input name="solarfieldOM" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
              <li><label>
                BESS $/kWh
                <input name="bess" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
            </form>
          </li>
          <p>Total Sum: {this.state.total}</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <button type="submit">Next</button>
          </form>
        </ul>
      </div>
    )
  }
}

export default OpexForm;