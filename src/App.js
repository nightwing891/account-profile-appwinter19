import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Profile from './components/account/Profile';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route 
        exact 
        path='/' 
        render={ () => <div>Home</div> }
      />
      <Route exact path='/profile' component={Profile}/>
    </Switch>
  </>
)

export default App;
