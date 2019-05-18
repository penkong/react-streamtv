import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm like connect, Field is comp
class StreamCreate extends Component {

  renderInput(formProps){ //cl
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input}/>
      </div>
    )
  }

  onSubmit(formValues){ //cl

  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if(!formValues.title) error.title = 'enter a title please';
  if(!formValues.description) error.description = 'enter description please';
  return error;  
}

export default reduxForm({ //it give tone of props after init in here
  form: 'streamCreate'
})(StreamCreate);
