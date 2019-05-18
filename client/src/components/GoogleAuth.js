import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {

  componentDidMount() {
    //gapi.auth2.getAuthInstance this is obj we want
    window.gapi.load('client:auth2' , ()=>{
      window.gapi.client.init({
        clientId: '891354093350-tiua7emnq62jj7gibtvia52ev6ba67md.apps.googleusercontent.com',
        scope: 'email' 
      }).then(()=>{// let user sign in out status ...
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get()); //catch for first initialize
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn();
    else this.props.signOut();
  }

  onSignInClick = () => this.auth.signIn(this.auth.currentUser.get().getId());
  
  onSignOutClick = () => this.auth.signOut()

  renderAuthButton(){
    if(this.props.isSignedIn === null) {
      return null;

    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"/>
            Sign Out
        </button>
      );
    } else {

      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
            SignIn
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);