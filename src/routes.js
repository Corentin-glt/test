import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Pages/Home/homeContainer';
import Error404 from './Pages/Error404/error404';

function Root({store}) {
  return(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </Provider>
  )
}


Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;