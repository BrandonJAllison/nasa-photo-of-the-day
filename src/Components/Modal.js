import React from 'react'
import './modal.css'



const Modal = (props) => {

  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{props.title}</h2>
        <p style={{padding: '20px'}}>{props.exp}</p>
        <button type="button" style={{marginTop: '25px', background:'#0B3D91', color:'white', border:'none', borderRadius: '5px', padding: '7px', marginBottom:'15px'}} onClick={props.handleClose}>
                        close
                    </button>
      </section>
    </div>
  );
};

export default Modal