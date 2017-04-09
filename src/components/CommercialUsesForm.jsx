import React from 'react';
import NavLink from './NavLink.jsx';
import FileInput from 'react-file-input';
import { Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';


//Refactor to reuse component, yes yes.

class CommercialUsesForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = "/BatteryDesignForm";
    const userChoices = [];
    for(var key in this.state) {
      userChoices.push(key);
    }
    window.commercialuses = userChoices;
    this.props.history.push(path);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checked' ? target.checked: target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleUploadChange(event) {
    window.consumptioncsv = event.target.files[0];
  }

  render() {
    return (
      <div>
        <h2>Commercial Uses</h2>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <ul>
                <li>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <li><label>
                      <input name="demandCharges" type="checkbox"
                             onChange={this.handleInputChange.bind(this)} />
                      Demand charges</label></li>
                    <li><label>
                      <input name="arbitrage" type="checkbox"
                             onChange={this.handleInputChange.bind(this)} />
                      Arbitrage</label></li>
                    <li><label>
                      <input name="peakingcapacity" type="checkbox"
                             onChange={this.handleInputChange.bind(this)} />
                      Peaking Capacity (e-mobility)</label></li>
                       <li><label>
                      <input name="transmissiondist" type="checkbox"
                             onChange={this.handleInputChange.bind(this)} />
                      Transmission and distribution investment deferment (e-mobility)</label></li>
                      <li><label>
                      <input name="distributedGen" type="checkbox"
                             onChange={this.handleInputChange.bind(this)} />
                      Distributed Generation Support / Distributed Storage (e-mobility)</label></li>
                    <li><label>
                      <input name="ancillary" type="checkbox"
                             onChange={this.handleInputChange.bind(this)} />
                      Ancillary Services</label></li>
                    <li><label>Additional grid data: <FileInput name="Additional grid data"
                               accept=".csv"
                               placeholder="file.csv"
                               className="inputClass"
                               onChange={this.handleChange} /></label></li>
                    <li>
                      <button type="submit">Next</button>
                    </li>
                  </form>
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              <Accordion>
                <Panel header="Demand charges" eventKey="1">
                   Reduces customer peak demand charge by supplying power during demand spikes.
                </Panel>
                <Panel header="Arbitrage" eventKey="2">
                   Reduces energy costs by purchasing energy during low-price periods and consuming from battery instead of grid during high-price periods (TOU required).
                </Panel>
                <Panel header="Peaking Capacity" eventKey="3">
                   Larger battery installations can be called on by the utility to provide power to the grid during periods of high demand.
                </Panel>
                <Panel header="Transmission and distribution investment deferment" eventKey="3">
                   Large consumers who having growing demands on the grid can defer investment in upgraded transmission and distribution equipment by implementing a storage installation.
                </Panel>
                <Panel header="Distributed Generation Support" eventKey="3">
                   By storing on-site distributed generation, customers can reduce costs by drawing from battery installation instead of from grid.
                </Panel>
                <Panel header="Ancillary Services" eventKey="3">
                    Large customers can be compensated by utilities for ancillary services provided to the grid (e.g. DER smoothing).
                </Panel>
              </Accordion>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default CommercialUsesForm;