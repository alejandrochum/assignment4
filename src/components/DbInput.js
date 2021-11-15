import React, { Component } from 'react'

class DbInput extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const amount =  e.target.amount.value; //gets the value from amount input field
        const desc = e.target.description.value; //gets the value from description input field
        let date = new Date().toISOString(); //gets the current date
        let newData= {
            id: '',
            description: desc,
            amount: Number(amount),
            date: date
        }
        this.props.add(newData); //calls the function in app.js passing the values for new data input
    }

    render() {
        return (
            <div className="data-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" required style={{marginRight:"30px", marginLeft:"10px"}}/>

                        <label htmlFor="amount">Amount</label>
                        <input type="decimal" name="amount" required style={{marginLeft:"10px"}} />
                    </div>
                    <button>Add {this.props.option}</button>
                </form>
            </div>
        )
    }
}

export default DbInput;