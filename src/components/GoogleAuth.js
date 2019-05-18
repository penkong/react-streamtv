import React, { Component } from 'react';


class GoogleAuth extends Component {

  state = { isSignedIn : null };

  componentDidMount() {
    //gapi.auth2.getAuthInstance this is obj we want
    window.gapi.load('client:auth2' , ()=>{
      window.gapi.client.init({
        clientId: '891354093350-97k9q1batjta6ei0pcv25plh4l1r7um9.apps.googleusercontent.com',
        scope: 'email' 
      }).then(()=>{// let user sign in out status ...
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(); //catch for first initialize
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderAuthButton(){
    if(this.state.isSignedIn === null) {
      return <div>i dont knewo</div>
    } else if (this.state.isSignedIn) {
      return <div>ddddd</div>
    } else {
      return <div> dddddffffff</div>
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

export default GoogleAuth;