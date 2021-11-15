import React, { Component } from 'react'

class Debits extends Component {

    debitList = () => {
        const data = this.props.debits;
        const listItems = data.map((d) => <li key={d.id}>{d.amount} {d.description} {d.date.slice(0, 10)}</li>);
        return listItems;
    }

    render() {
        return (
            <div>
                <h1>Debits</h1>
                {this.debitList()}
                <this.props.balanceComponent />
                <this.props.dbInputComponent />
            </div>
        )
    }
}

export default Debits;