import React from 'react';
import getData from './../helpers/analysisHelpers.js';
import {Grid, Row, Col, Image} from 'react-bootstrap';

var imgStyle = {
  width: "400px",
  height: "400px",
}

class Report extends React.Component {
	constructor(props) {
		super(props);
    console.log(this.props);
	}

  componentWillMount() {
    getData(function(err, graph) {
      if (err) {
        console.log('error getting graph')
      } else {
        this.setState({graph: graph});
        console.log(this.state.graph);
      }
    })
  }

  render() {
    return (
      <div>{console.log(window.graph)}
        <h2>Report</h2>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <div id="batterycycles">
                <Image style={imgStyle} src="/battery.png" />
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id="batterysavings">
                <Image style={imgStyle} src="/battery_savings.png" />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Report;