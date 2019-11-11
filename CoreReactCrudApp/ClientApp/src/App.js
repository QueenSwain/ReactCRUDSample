import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddNewUser';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
    <Layout>
        <Route exact path='/' component={Home} />
              <Route path='/userList' component={UserList} />
              <Route path='/addUser' component={AddUser} />
              <Route path='/user/edit/:userid' component={AddUser} />
      </Layout>
    );
  }
}
