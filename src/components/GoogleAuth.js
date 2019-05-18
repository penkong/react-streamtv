import React, { Component } from 'react';


class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load('client:auth2' , ()=>{
      window.gapi.client.init({
        clientId: '891354093350-97k9q1batjta6ei0pcv25plh4l1r7um9.apps.googleusercontent.com',
        scope: 'email' 
      })
    })
  }
  
  render() {
    return (
      <div>
        GoogleAuth
      </div>
    );
  }
}

export default GoogleAuth;