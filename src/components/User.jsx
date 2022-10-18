import React from "react";

const User = (props)=>{
    return (
        <div>
            <h1>
            {props.name}
            </h1>
            <p>
                {props.description}
            </p>
        </div>
    );
}

export default User;