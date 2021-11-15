
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import AccountBalance from './components/AccountBalance';
import DbInput from './components/DbInput';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }

  }

  //updates the total balance according to the current values in the data
  updateBalance = () => { 
    const debits = this.state.debits;
    const credits = this.state.credits;
    let totalDebits = 0;
    let totalCredits = 0;
    debits.forEach(element => {
      totalDebits = totalDebits+ element.amount;
    });

    credits.forEach(element => {
      totalCredits = totalCredits + element.amount;
    });

    this.setState({accountBalance: (totalCredits - totalDebits).toFixed(2)}) //use toFixed(2) for accurate printing of the balance
    console.log(totalCredits - totalDebits);
  }

  //fetch debit data from API
  getDebit = () => {
    fetch("https://moj-api.herokuapp.com/debits")
      .then(response => response.json())
      .then(data => {
        this.setState({ debits: data }) //sets debits state variable to the fetched data
      })
      .then(() => {
        this.updateBalance();
      })
  }

  addDebit = (debit) => {
    const newDebits = this.state.debits;
    newDebits.push(debit);
    this.setState({ debits: newDebits })
    console.log(this.state.debits);
    this.updateBalance();
  }

  //fetch credit data from API
  getCredit = () => {
    fetch("https://moj-api.herokuapp.com/credits")
      .then(response => response.json())
      .then(data => {
        this.setState({ credits: data }) //sets credits state variable to the fetched data
      })
      .then(() => {
        this.updateBalance();
      })
  }

  addCredit = (credit) => {
    const newDebits = this.state.credits;
    newDebits.push(credit);
    this.setState({ credits: newDebits })
    this.updateBalance();
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

    const DebitInputComponent = () => (<DbInput add={this.addDebit} option={'Debit'}/>)
    const CreditInputComponent = () => (<DbInput add={this.addCredit} option={'Credit'}/>)

    const BalanceComponent = () => (<AccountBalance accountBalance={this.state.accountBalance} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} balanceComponent={BalanceComponent} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);

    const DebitsComponent = () => (<Debits dbInputComponent={DebitInputComponent} debits={this.state.debits} balanceComponent={BalanceComponent}/>);
    const CreditsComponent = () => (<Credits dbInputComponent={CreditInputComponent} credits={this.state.credits} balanceComponent={BalanceComponent} />);
  
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
        </div>
      </Router>
    );
  }

}

export default App;