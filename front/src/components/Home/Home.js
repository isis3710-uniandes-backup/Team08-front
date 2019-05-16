import React, { Component } from 'react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        
      </div>
    );
  }
}

export default Home;