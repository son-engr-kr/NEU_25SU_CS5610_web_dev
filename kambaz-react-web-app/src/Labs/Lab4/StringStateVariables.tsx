import { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input 
        className="form-control mb-2"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter first name"
      />
      <hr/>
    </div>
  );
}

// import useState
// declare and initialize state variable
// render string state variable
// initialize a text input field with the state variable
// update the state variable at each key stroke 