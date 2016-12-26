import React from 'react';
import Raccoon from './pages/Raccoon';
import CatSearch from './pages/CatSearch';
import { Link } from 'react-router';

import io from 'socket.io-client';

class CatFace extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status:'disconnected',
      title: ''
    };
    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.welcome = this.welcome.bind(this)
  }
    
	componentWillMount() {
		this.socket = io('http://localhost:3432');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
    }

    connect() {
       this.setState({status: 'connected'});
    }

    disconnect() {
       this.setState({status: 'disconnected'});
    }

    welcome(serverState) {
    	this.setState({ title: serverState.title});
    }

  render() {
    return (
      <div>
        <header>
          <h1> Cat Face: </h1>
          <h3>The face of the Cat Suite</h3>
          <nav>
              <Link to='/CatSearch'>Search</Link>
              <Link to='/Raccoon'>Raccoon</Link>
          </nav>
        </header>
        {this.props.children}
      </div>

    ) //return
  } //render
} //CatFace

export default CatFace;
