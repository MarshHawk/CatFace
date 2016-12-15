import React from 'react';
import Header from './reusableComponents/Header';
import Raccoon from './reusableComponents/Raccoon';
import Cat from './reusableComponents/Cat';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import io from 'socket.io-client';

class CatFace extends React.Component {

  constructor(){
    super(...arguments);
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
      <Router history={hashHistory}>
      <div className="editorInterface">
        <Header title={this.state.title} status={this.state.status} />
      </div>
      
        <Route path='/' component={Cat} />
        <Route path='/Raccoon' component={Raccoon} />
      </Router>

    ) //return
  } //render
} //CatFace

export default CatFace;
