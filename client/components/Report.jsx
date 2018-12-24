import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

var imgStyle = {
  width: "400px",
  height: "400px",
}

class Report extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>
        <h2>Report</h2>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <div id="batterycycles">
                <Image style={imgStyle} src="./assets/images/battery.png" />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id="batterysavings">
                <Image style={imgStyle} src="./assets/images/battery_savings.png" />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Report;
