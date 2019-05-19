import React from 'react'
import history from '../../history';
import Modal from '../Modal';


const StreamDelete = () => {

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <Modal 
        title="Delete Stream"
        content = "Are you sure you want delete stream?"
        actions = {actions}
        onDismiss = {()=>history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
