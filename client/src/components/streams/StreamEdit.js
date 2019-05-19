import React from 'react'
import { connect } from 'react-redux';


//have props from react router dom
const StreamEdit = props => {
  return (
    <div>
      edit
    </div>
  )
}
const mapStateToProps = (state , ownProps) => {
  return { streams: state.streams[ownProps.match.param.id] };
}

export default connect(mapStateToProps, {})(StreamEdit)
