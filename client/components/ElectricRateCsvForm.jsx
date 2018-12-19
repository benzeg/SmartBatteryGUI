import React from 'react';

class ElectricRateCsvForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit=(event)=> {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    //pop-up message when no file is selected
    const path = "/Report";
    window.electriccsv = this.state === null ? "None": this.state.electriccsv;
    this.props.history.push(path);
  }

  handleChange=(event)=> {
  	this.setState({electriccsv: event.target.files[0]});
  }

  render() {
    return (
      <div>
        <h2>Utility</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit}>
              <label>Electricity Rate:
              <input type="file"
                  name="Electricity Rate"
                  accept=".csv"
                  placeholder="file.csv"
                  className="inputClass"
                  onChange={this.handleChange} /></label>
              <button type="submit">Next</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default ElectricRateCsvForm;