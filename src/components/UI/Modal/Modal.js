import React from "react";
import classes from "./Modal.module.css"
function Modal(props){
    
  function backdropClickHandler(){
    props.closeModal();
  }
return (
<React.Fragment>

   <div onClick={backdropClickHandler} className={classes.backdrop}>

   </div>
   <div className={classes.modal}>
     {props.children}
   </div>
</React.Fragment>

);
}
export default Modal;