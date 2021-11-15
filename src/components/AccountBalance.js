import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        Balance: {this.props.accountBalance}
        <div>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/debits"> Debits </Link>
          <Link to="/credits"> Credits </Link>
        </div>
      </div>
    );
  }
}

export default AccountBalance;