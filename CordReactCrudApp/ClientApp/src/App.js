import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { StudentList } from './components/StudentList';
import { AddStudent } from './components/AddNewStudent';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
          // routes.js
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
              <Route path='/fetchdata' component={FetchData} />
              <Route path='/studentList' component={StudentList} />
              <Route path='/addStudent' component={AddStudent} />
              <Route path='/student/edit/:studentid' component={AddStudent} />
      </Layout>
    );
  }
}
