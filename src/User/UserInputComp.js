import React from "react";

const UserInputComp = (props) => {
    return (
        <div>
            <label>PASSWORD : </label>
            <input onChange={props.handle} value={props.name} type="password"/>
            <button onClick={props.clearHandle}>X</button>
        </div>
    );
}

export default UserInputComp;