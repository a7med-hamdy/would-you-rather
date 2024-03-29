import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { handleIntialData } from '../redux/actions/intial';
import Home from '../views/Home';
import NewQuestion from '../views/NewQuestion';
import Leaderboard from '../views/Leaderboard';
import Login from '../views/Login';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Questionpage from '../components/Questionpage';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleIntialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">   
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/question/:id" component={Questionpage}  logged = {this.props.logged}/>
            <ProtectedRoute exact path='/Home'  component={Home} logged = {this.props.logged} />
            <ProtectedRoute exact path='/Leaderboard' component={Leaderboard} logged = {this.props.logged} />
            <ProtectedRoute exact path='/add' component={NewQuestion} logged = {this.props.logged} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    logged: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
