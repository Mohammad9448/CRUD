import React ,{useRef,useState} from 'react';
import InputRequiredValidator from '../AuxFunctions/InputRequiredValidator';
import './AddUser.css';
const AddUser = (props) => {
    const nameField = useRef();
    const ageField = useRef();
    const genField = useRef();
    const [isInputvalid,setIsInputvalid] = useState(false);
    
    const [wasFormSubmitted,setWasFormSubmitted] = useState(false);
 



  function submitFormHandler(e){
    e.preventDefault();
    let nameval = nameField.current.value;
    let ageVal = ageField.current.value;
    let genVal = genField.current.value;
    setWasFormSubmitted(true);
    
    if(!InputRequiredValidator({"n" : nameval , "a" : ageVal , "g":genVal}))
    {
        setIsInputvalid(false);
        return;
    }
    setIsInputvalid(true);
    let user = { id:Math.round(Math.random()*1000000), name : nameval , age:ageVal , gender:genVal}
    props.onAddUser(user);
    nameField.current.value = "";
    ageField.current.value = "";
    genField.current.value="";
    setIsInputvalid(false);
    setWasFormSubmitted(false);
  }
  let errors = wasFormSubmitted && !isInputvalid ? (<li>Fields with * are Required </li>) : null;
  
    return (
<div className="create-form">
    <h2>Add a new User</h2>
<form onSubmit={submitFormHandler}>
    <div className="form-control">
    <input id="na"  ref={nameField} type="text" placeholder="Name*"/>
    </div>
    <div className="form-control">
    <input id="ag"  ref={ageField} type="number" placeholder="Age*" min="10" />
    </div>
    <div className="form-control">
    <input id="ge"  ref={genField} type="text" placeholder="Gender*"  />
    </div>
    <div className="submit-control">
        <input  type="submit" value="Add User" />
    </div>
</form>
<ul className="error-list">
{errors}
</ul>
</div>
    )
}
export default AddUser;
