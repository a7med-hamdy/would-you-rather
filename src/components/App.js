import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleIntialData } from '../redux/actions/intial';
import Home from '../views/Home';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleIntialData());
  }
  render() {
    return (
      <div className="App">
        {this.props.loading === true ? null :<Home /> }
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
