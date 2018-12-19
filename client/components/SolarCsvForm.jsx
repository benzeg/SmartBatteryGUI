import React from 'react';

class SolarCsvForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit=(event)=> {
    event.preventDefault();
    const path = "/ConsumptionCsvForm";
    //pop-up message when no file is selected
    window.solarcsv = this.state === null ? "None": this.state.solarcsv;
    this.props.history.push(path);
  }

  handleChange=(event)=> {
  	this.setState({solarcsv: event.target.files[0]});
  }

  render() {
    return (
      <div>
        <h2>Solar Generation</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit}>
            	<label>Solar generation 8760:
              <input type="file"
                  name="Solar generation 8760"
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

export default SolarCsvForm;