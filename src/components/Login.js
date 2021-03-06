import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class LogIn extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user }
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({ user: updatedUser })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile" />)
    }

    return (
      <div style ={{textAlign:"center"}}>
        <img src="https://picsum.photos/201" alt="bank" />
        <h1>Bank of React</h1>
        <div className="data-form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="userName">User Name</label>
              <input type="text" name="userName" required style={{ marginLeft: "20px" }} onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" style={{ marginLeft: "30px" }} />
            </div>
            <button>Log In</button>
            <Link to="/"><button>Cancel</button></Link>
          </form>
        </div>
      </div>

    )
  }
}

export default LogIn