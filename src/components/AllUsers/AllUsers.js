import React from "react";
import './AllUsers.css';
function AllUsers(props){
return (

    <table>
        <thead>
        <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
            <td>gender</td>
        </tr>
        </thead>
        <tbody>
    {props.users.map(x=>{
        return (     

            <tr key={x.id}>
                <td>{x.id} ggg</td>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.gender}</td>
                <td><button onClick={}></button></td>
            </tr>
            

        );
    })}
    </tbody>
    </table>
);
}
export default AllUsers;