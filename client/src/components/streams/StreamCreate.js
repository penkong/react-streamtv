import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm like connect, Field is comp
class StreamCreate extends Component {

  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      )
    }
  }

  renderInput = (formProps) => { //cl
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        {this.renderError(formProps.meta)}
      </div>
    )
  }

  onSubmit(formValues){ //cl
    //create --  our api is json server
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
  form: 'streamCreate',
  validate
})(StreamCreate);
