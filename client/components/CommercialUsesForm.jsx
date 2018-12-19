import React from 'react';
import { Grid, Row, Col, PanelGroup, Panel } from 'react-bootstrap';

const formManual = [
  ["Demand charges", "Reduces customer peak demand charge by supplying power during demand spikes."],
  ["Arbitrage", "Reduces energy costs by purchasing energy during low-price periods and consuming from battery instead of grid during high-price periods (TOU required)."],
  ["Peaking Capacity (e-mobility)", "Larger battery installations can be called on by the utility to provide power to the grid during periods of high demand."],
  ["Transmission and distribution investment deferment (e-mobility)", "Large consumers who have growing demands on the grid can defer investment in upgraded transmission and distribution equipment by implementing a storage installation."],
  ["Distributed Generation Support / Distributed Storage (e-mobility)", "By storing on-site distributed generation, customers can reduce costs by drawing from battery installation instead of from grid."],
  ["Ancillary Services", "Large customers can be compensated by utilities for ancillary services provided to the grid (e.g. DER smoothing)."]
];

class CommercialUsesForm extends React.Component {
	constructor(props) {
    super(props);
	}

	handleSubmit = (event)=> {
    event.preventDefault();
    const path = "/BatteryDesignForm";
    const userChoices = [];
    for(var key in this.state) {
      userChoices.push(key);
    }
    window.commercialuses = userChoices;
    this.props.history.push(path);
  }

  handleInputChange=(event)=> {
    const target = event.target;
    const value = target.type === 'checked' ? target.checked: target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleUploadChange=(event)=> {
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
                  <form onSubmit={this.handleSubmit}>
                    <li><label>
                      <input name="demandCharges" type="checkbox"
                             onChange={this.handleInputChange} />
                      Demand charges</label></li>
                    <li><label>
                      <input name="arbitrage" type="checkbox"
                             onChange={this.handleInputChange} />
                      Arbitrage</label></li>
                    <li><label>
                      <input name="peakingcapacity" type="checkbox"
                             onChange={this.handleInputChange} />
                      Peaking Capacity (e-mobility)</label></li>
                       <li><label>
                      <input name="transmissiondist" type="checkbox"
                             onChange={this.handleInputChange} />
                      Transmission and distribution investment deferment (e-mobility)</label></li>
                      <li><label>
                      <input name="distributedGen" type="checkbox"
                             onChange={this.handleInputChange} />
                      Distributed Generation Support / Distributed Storage (e-mobility)</label></li>
                    <li><label>
                      <input name="ancillary" type="checkbox"
                             onChange={this.handleInputChange} />
                      Ancillary Services</label></li>
                    <li><label>Additional grid data: <input type="file" 
                              name="Additional grid data"
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
              <PanelGroup accordion id="commercialUses_manual" >
                {formManual.map((d, index)=>
                  <Panel eventKey={ index.toString() } key={ `commercialUses_manual_childPanel_${index}`}>
                    <Panel.Heading>
                      <Panel.Title toggle>{d[0]}</Panel.Title>    
                    </Panel.Heading>
                    <Panel.Body collapsible>{d[1]}</Panel.Body> 
                  </Panel>
                )}
              </PanelGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default CommercialUsesForm;