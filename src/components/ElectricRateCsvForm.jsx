import React from 'react';
import NavLink from './NavLink.jsx';
import FileInput from 'react-file-input';

class ElectricRateCsvForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    //pop-up message when no file is selected
    const path = "/Report";
    window.electriccsv = this.state === null ? "None": this.state.electriccsv;
    this.props.history.push(path);
  }

  handleChange(event) {
  	this.setState({electriccsv: event.target.files[0]});
  }

  render() {
    return (
      <div>
        <h2>Utility</h2>
        <ul>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>Electricity Rate:
              <FileInput name="Electricity Rate"
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

export default ElectricRateCsvForm;