import React, {Component, PropTypes} from 'react';

class Header extends Component {

    //getDefaultProps() {
    //	return {status: 'disconnected'}
    //}

	render() {
		return (
		  <header className="row">
		  <div className="col-xs-10">
		  	<h1>{this.props.title}</h1>
		  </div>
		  <div className="col-xs-2">
		      <span id="connection-status" className={this.props.status}></span>
		  </div>
		  </header>
		)
	}
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Header.getDefaultProps = {
    status: 'disconnected',
}

export default Header;