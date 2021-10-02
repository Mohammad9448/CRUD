import React, { useRef, useState } from "react";
import InputRequiredValidator from '../AuxFunctions/InputRequiredValidator';
import "./EditUser.css"
function EditUser(props) {
    const nameField = useRef();
    const ageField = useRef();
    const genField = useRef();
    const [isInputvalid, setIsInputvalid] = useState(false);
    const [wasFormSubmitted, setWasFormSubmitted] = useState(false);
    const temp = {...props.PopulatedUser};
    const Name = temp.name;
    const a = temp.age;
    const g = temp.gender;
    //SubmitForm
    function submitFormHandler(e) {
        e.preventDefault();
        e.preventDefault();
        let nameval = nameField.current.value;
        let ageVal = ageField.current.value;
        let genVal = genField.current.value;
        setWasFormSubmitted(true);

        if (!InputRequiredValidator({ "n": nameval, "a": ageVal, "g": genVal })) {
            setIsInputvalid(false);
            return;
        }
        setIsInputvalid(true);
        let user = { name: nameval, age: ageVal, gender: genVal };
        props.SaveBtnClicked(props.PopulatedUser.id,user);


    }
    let errors = wasFormSubmitted && !isInputvalid ? (<li>Fields with * are Required </li>) : null;
    return (
        <div className="create-form">
            <h2>Edit {props.PopulatedUser.name}</h2>
            <form onSubmit={submitFormHandler}>
                <div className="form-control">
                    <input id="na" ref={nameField}  defaultValue={Name} type="text" placeholder="Name*" />
                </div>
                <div className="form-control">
                    <input id="ag" ref={ageField} defaultValue={a} type="number" placeholder="Age*" min="10" />
                </div>
                <div className="form-control">
                    <input id="ge" ref={genField} defaultValue={g}  type="text" placeholder="Gender*" />
                </div>
                <div className="submit-control">
                    <input type="submit" value="Save" />
                </div>
            </form>
            <ul className="error-list">
                {errors}
            </ul>
            <button id="closeBtn" className="btn btn-danger" onClick={() => props.closeModal()}> close</button>
        </div>
    );
}
export default EditUser;