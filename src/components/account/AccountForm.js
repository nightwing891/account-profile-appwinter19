import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

class AccountForm extends Component {
  state = { username: '', membershipLevel: '' }

  componentDidMount() {
    if(this.props.username) {
      const { username, membershipLevel } = this.props
      this.setState({ username, membershipLevel })
    }
  }
  // this only works for text inputs
  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateAccount(this.state)
    // should clear out form
    // this.setState({ username: '', membershipLevel: '' })
  }

  render() {
    const { username, membershipLevel } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='username'
          value={username}
          onChange={this.handleChange}

          label='Username'
          required
        />
        <Form.Select
          name='membershipLevel'
          value={membershipLevel}
          onChange={this.handleChange}
          options={levels}

          label='Membership Level'
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

const levels = [
  { key: 'b', text: 'Bronze', value: 'Bronze' },
  { key: 's', text: 'Silver', value: 'Silver' },
  { key: 'g', text: 'Gold', value: 'Gold' },
  { key: 'p', text: 'Platinum', value: 'Platinum' }
]

export default ConnectedAccountForm;