import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleIntialData } from '../redux/actions/intial';
import Home from '../views/Home';
import NewQuestion from '../views/NewQuestion';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleIntialData());
  }
  render() {
    return (
      <div className="App">
        <NewQuestion />
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
