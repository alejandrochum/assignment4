import React, { Component } from 'react'

class Credits extends Component {
    creditList = () => {
        const data = this.props.credits;
        const listItems = data.map((d) => <li key={d.id}>{d.amount} {d.description} {d.date.slice(0, 10)}</li>);
        return listItems;
    }

    render() {
        return(
            <div>
                <h1>Credits</h1>
                {this.creditList()}
                <this.props.balanceComponent />
                <this.props.dbInputComponent />
            </div>
        )
    }
}

export default Credits;