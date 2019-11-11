import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddNewUser';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
          // routes.js
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
              <Route path='/fetchdata' component={FetchData} />
              <Route path='/userList' component={UserList} />
              <Route path='/addUser' component={AddUser} />
              <Route path='/user/edit/:userid' component={AddUser} />
      </Layout>
    );
  }
}
