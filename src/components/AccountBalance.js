import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <h3>Balance: {this.props.accountBalance}</h3>
        <div style={{textAlign:"center"}}>
          <Link className="link-button" to="/login">Login</Link>
          <Link className="link-button" to="/userProfile">User Profile</Link>
          <Link className="link-button" to="/debits"> Debits </Link>
          <Link className="link-button" to="/credits"> Credits </Link>
        </div>
      </div>
    );
  }
}

export default AccountBalance;