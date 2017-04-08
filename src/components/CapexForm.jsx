import React from 'react';
import NavLink from './NavLink.jsx';

class CapexForm extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      solarmodule: 0,
      inverter: 0,
      mounting: 0,
      development: 0,
      battery: 0,
      solarTotal: 0,
      total: 0
    }
	}

	handleSubmit(event) {
    event.preventDefault();
    const path = "/OpexForm";
    window.capex = Object.assign(this.state);
    this.props.history.push(path);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    var sum = 0;
    if (name !== 'battery') {
      this.setState({[name]: target.value, solarTotal: this.state.solarTotal - 
      (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value))),
      total: this.state.total - 
      (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))
      });
    } else {
      this.setState({[name]: target.value,
      total: this.state.total - (parseInt(this.state[name]) - (isNaN(parseInt(target.value)) ? 0: parseInt(target.value)))
      });
    }
  }

  render() {
    return (
      <div>
        <h2>CAPEX</h2>
        <ul>
          <li>
            <form>
              <li><label>
                Solar Module ($/W .30)
                <input name="solarmodule" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
              <li><label>
                Inverter ($/W .05)
                <input name="inverter" type="number"
                       onChange={this.handleInputChange.bind(this)} />
                </label></li>
              <li><label>
                Mounting
              <input name="mounting" type="number"
                     onChange={this.handleInputChange.bind(this)} />
              </label></li>
              <li><label>
                Development
              <input name="development" type="number"
                     onChange={this.handleInputChange.bind(this)} />
              </label></li>
            </form>
          </li>
          <p>Solar Total: {this.state.solarTotal}</p>
          <form>
            <li><label>
              Battery (wrap)
              <input name="battery" type="number"
                    onChange={this.handleInputChange.bind(this)} />
              </label></li>
          </form>
          <p>Total Capex: {this.state.total}</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <button type="submit">Next</button>
          </form>
        </ul>
      </div>
    )
  }
}

export default CapexForm;