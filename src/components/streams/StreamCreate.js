import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm like connect, Field is comp
class StreamCreate extends Component {

  renderInput(formProps){
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input}/>
      </div>
    )
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
      </form>
    );
  }
}

export default reduxForm({ //it give tone of props after init in here
  form: 'streamCreate'
})(StreamCreate);
