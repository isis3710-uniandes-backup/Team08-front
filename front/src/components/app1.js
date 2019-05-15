import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';


class App extends Component {



  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
   // console.log("Ruta:", route);
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    } 
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    if(isAuthenticated()){
      console.log("No autenticado");
      //this.props.auth.login();
    }


    return (
      <div>
           <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                  
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
       
      </div>
    );
  }

}

export default App;