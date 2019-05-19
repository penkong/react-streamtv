import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
//reduxForm like connect, Field is comp
class StreamCreate extends Component {

  onSubmit = formValues => { //cl
    //create --  our api is json server
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null,{ createStream })(StreamCreate);
