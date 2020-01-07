import React, { Component } from 'react';

// Set up the Context
const AccountContext = React.createContext();

// create exportable consumer that could be used in other components 
export const AccountConsumer = AccountContext.Consumer;

// create provider that defines anything you want to be global
class AccountProvider extends Component {
  state = {
    username: 'Sam2',
    dateJoined: '1/5/20',
    membershipLevel: 'Bronze'
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render(){
    return(
      <AccountContext.Provider value={{
        ...this.state,
        updateAccount: this.updateAccount,
      }}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;
