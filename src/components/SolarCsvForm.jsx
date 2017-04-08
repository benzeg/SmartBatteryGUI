import React from 'react';
import NavLink from './NavLink.jsx';
import FileInput from 'react-file-input';

class SolarCsvForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
    const path = "/ConsumptionCsvForm";
    //pop-up message when no file is selected
    window.solarcsv = this.state === null ? "None": this.state.solarcsv;
    this.props.history.push(path);
  }

  handleChange(event) {
  	this.setState({solarcsv: event.target.files[0]});
  }

  render() {
    return (
      <div>
        <h2>Solar Generation</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
            	<label>Solar generation 8760:
              <FileInput name="Solar generation 8760"
              					 accept=".csv"
              					 placeholder="file.csv"
              					 className="inputClass"
              					 onChange={this.handleChange.bind(this)} /></label>
              <button type="submit">Next</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default SolarCsvForm;