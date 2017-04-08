import React from 'react';
import NavLink from './NavLink.jsx';

class Form extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = "/report";
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="userName"/>
              <input type="text" placeholder="repo"/>
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
      </div>
    )
  }
}

export default Form;