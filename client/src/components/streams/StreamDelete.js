import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream , deleteStreams } from '../../actions';

import history from '../../history';

import Modal from '../Modal';

class StreamDelete extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  renderActions(){
    const { id } = this.props.match.params
    return (
      <React.Fragment>
        <button className="ui button negative" 
          onClick={()=>this.props.deleteStreams(id)}>Delete</button>
        <Link className="ui button" to="/" >cancel</Link>
      </React.Fragment>
    );
  }

  renderContent(){
    if (!this.props.stream) return 'Are you sure you want delete stream?'
    return `Are you sure you want delete stream with title: ${this.props.stream.title}?`
  }

  render() {
    return (
      <div>
      <Modal 
        title = "Delete Stream"
        content = {this.renderContent()}
        actions = {this.renderActions()}
        onDismiss = {()=>history.push('/')}
      />
    </div>
    );
  }
}

const mapStateToProps = (state , ownProps) => {
  return { stream : state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {
  fetchStream,
  deleteStreams
})(StreamDelete);
