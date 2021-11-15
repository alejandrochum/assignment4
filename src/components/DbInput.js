import React, { Component } from 'react'

class DbInput extends Component {
    constructor() {
        super()
        this.state = {
            newData: {
                id: '',
                description: '',
                amount: 0,
                date: '2018-04-26T09:26:58.413Z'
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const amount =  e.target.amount.value;
        console.log(amount);
        const desc = e.target.description.value;
        let date = new Date().toISOString()

        let newData= {
            id: '',
            description: desc,
            amount: parseFloat(amount),
            date: date
        }

        this.props.addDebit(newData);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default DbInput;