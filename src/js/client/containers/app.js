import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

import Login from '../components/login';
import Posts from '../components/posts';

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <div className='app'>
        <div className='arrow-up' />
        {!isAuthenticated &&
          <Login
            errorMessage={errorMessage}
            onLoginClick={ creds => dispatch(loginUser(creds)) }
          />
        }
        {isAuthenticated &&
          <Posts posts={ this.props.posts } />
        }
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const { auth } = state;
  // const { authenticated } = zoned;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)
