import React from 'react'
import './modal.css'

class Modal extends React.Component {
   state = {
      isOpen: false
   }
   render() {
      return (
         <React.Fragment>
            <button onClick={() => this.setState({ isOpen: true })}>Open modal</button>
            {this.state.isOpen && <div className='modal'>
               <div className='modal-body'>
                  <h1>Modal title</h1>
                  <p>Modal</p>
                  <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
               </div>
            </div>}
         </React.Fragment>
      )
   }
}

export default Modal
