import React, { Component } from 'react'
import AccountBalance from './AccountBalance';

class Debits extends Component {

    debitList = () => {
        const data = this.props.debits;
        const listItems = data.map((d) => <li key={d}>{d.amount + " " + d.description + " " + d.date}</li>);
        return listItems;
    }

    render() {
        return (
            <div>
                <h1>Debits</h1>
                {this.debitList()}
                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        )
    }
}

export default Debits;