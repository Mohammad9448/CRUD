import React from "react";
import './AllUsers.css';
function AllUsers(props){
   function editButtonClicked(id)
   {
         props.editButtonClicked(id);

   }
   function delButtonClicked(id)
   {
         props.delButtonClicked(id);

   }
return (
    <div className="table-responsive">
    <table className="tab table table-hover">
        <thead>
        <tr>
        
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
    {props.users.map(x=>{
        return (     

            <tr key={x.id}>
               
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.gender}</td>
                <td><button className="btn btn-success" onClick={() => editButtonClicked(x.id)}>Edit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg></button>
<button id="deleteBtn" className="btn btn-danger" onClick={() => delButtonClicked(x.id)} >Del <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
</td> 
            </tr>
            

        );
    })}
    </tbody>
    </table>
    </div>
);
}
export default AllUsers;