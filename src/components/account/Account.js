import React from 'react';
import { Card } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

const Account = () => (
  <AccountConsumer>
    { value => (
      <Card>
        <Card.Content>
          <h1>{value.username}</h1>
          <p>
            Date Joined: {value.dateJoined}
          </p>
        </Card.Content>
        <Card.Content>
          <p>Membership Level: {value.membershipLevel} </p>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
)

export default Account;