import React from "react";
import "./userStyle.css";
export default function UserCards({users,isLoading}) {
  return (
    <>
      {isLoading ? (
        <div className="loader"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> // Display loader while loading state is true
        ) : (
          <div className="flex-container">
          {users.map(({id,first_name,last_name,email,avatar}) =>( 
            <div className="card mg20 bgGradient" style={{ width: "18rem" }} >
            <div className="img-container">
            <img src={avatar} className="card-img-top" alt="..." />
            </div>
            <div className="card-body" style={{paddingLeft:30}}>
            
            <h5 className="card-title" key={id} >
            {first_name} {last_name}
            </h5>
            
            
            <p className="card-text">
            {email}
            </p>
            </div>
            </div>  
            ))}
            </div>
         )}
    </>
  );
}
