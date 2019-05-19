import React from 'react'
//because of we make history we use plain router
import { Router, Route } from 'react-router-dom';

import history from '../history'; //for prog nav
import Header from './Header';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/edit/:id" exact component={StreamEdit}/>
          <Route path="/streams/delete/:id" exact component={StreamDelete}/>
          <Route path="/streams/show" exact component={StreamShow}/>
        </div>
      </Router>
    </div>
  )
}

export default App;