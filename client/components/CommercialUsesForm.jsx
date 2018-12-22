import React from 'react';
import { Grid, Row, Col, PanelGroup, Panel } from 'react-bootstrap';
import update from 'immutability-helper';

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
    const initialState = {
      demandCharges: false,
      arbitrage: false,
      peekingCapacity: false,
      transmissionDistribution: false,
      distributionGeneration: false,
      ancillary: false,
      csvFile: null
    }
    const session = window.sessionStorage.getItem('form-data-CommercialUses');
    if (session) Object.assign(initialState, JSON.parse(session));
    this.state = initialState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const path = "#/BatteryDesignForm";
    const formData = Object.assign(this.state);
    window.sessionStorage.setItem('form-data-CommercialUses', JSON.stringify(formData));
    window.location.assign( window.location.href.replace(/#.*/g, path) );
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      update(this.state, {
        [name]: { $set: value }
      })
    );
  }

  handleUploadChange = (event) => {
    this.setState(
      update(this.state, {
        [event.target.name]: { $set: event.target.files[0] }
      })
    );
  }

  render() {
    return (
      <div>
        <h2>Commercial Uses</h2>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={6} md={4}>


              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label>
                    <br /><input name="demandCharges" type="checkbox" checked={this.state["demandCharges"]}
                      onChange={this.handleInputChange} />
                    Demand charges</label>
                  <label>
                    <br /><input name="arbitrage" type="checkbox" checked={this.state["arbitrage"]}
                      onChange={this.handleInputChange} />
                    Arbitrage</label>
                  <label>
                    <br /><input name="peakingCapacity" type="checkbox" checked={this.state["peakingCapacity"]}
                      onChange={this.handleInputChange} />
                    Peaking Capacity (e-mobility)</label>
                  <label>
                    <br /><input name="transmissionDistribution" type="checkbox" checked={this.state["transmissionDistribution"]}
                      onChange={this.handleInputChange} />
                    Transmission and distribution investment deferment (e-mobility)</label>
                  <label>
                    <br /><input name="distributedGen" type="checkbox" checked={this.state["distributionGeneration"]}
                      onChange={this.handleInputChange} />
                    Distributed Generation Support / Distributed Storage (e-mobility)</label>
                  <label>
                    <br /><input name="ancillary" type="checkbox" checked={this.state["ancillary"]}
                      onChange={this.handleInputChange} />
                    Ancillary Services</label>
                  <label>Additional grid data: <br /><input type="file" checked={this.state["csvFile"]}
                    name="Additional grid data"
                    accept=".csv"
                    placeholder="file.csv"
                    className="inputClass"
                    onChange={this.handleChange} /></label>
                </fieldset>
                <fieldset>
                  <button type="submit">Next</button>
                </fieldset>
              </form>


            </Col>
            <Col xs={6}>
              <PanelGroup accordion id="commercialUses_manual" >
                {formManual.map((d, index) =>
                  <Panel eventKey={index.toString()} key={`commercialUses_manual_childPanel_${index}`}>
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