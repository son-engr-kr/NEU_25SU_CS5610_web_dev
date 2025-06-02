import { useState } from "react";
export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="form-control mb-2"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        placeholder="Name"
      />
      <input
        className="form-control mb-2"
        type="number"
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}
        placeholder="Age"
      />
      <hr/>
    </div>
  );
}

// declare and initialize object state variable with multiple fields
// display raw JSON
// initialize input field with an object's field value
// update field as user types. copy old object, override specific field with new value
// update field as user types. copy old object, override specific field with new value 