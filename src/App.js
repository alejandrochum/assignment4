
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [{}],
      credits: [{}]
    }

  }

  //fetch debit data from API
  getDebit = () => {
    fetch("https://moj-api.herokuapp.com/debits")
      .then(response => response.json())
      .then(data => {
        this.setState({debits: data}) //sets debits state variable to the fetched data
      })
  }

  //fetch credit data from API
  getCredit = () => {
    fetch("https://moj-api.herokuapp.com/credits")
      .then(response => response.json())
      .then(data => {
        this.setState({credits: data}) //sets credits state variable to the fetched data
      })
  }

  //call for the functions to get the data when component mounts
  componentDidMount = () => {
    this.getDebit();
    this.getCredit();
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const DebitsComponent = () => (<Debits />)
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }

}

export default App;