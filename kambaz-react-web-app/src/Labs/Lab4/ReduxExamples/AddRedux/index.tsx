import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>{a} + {b} = {sum}</h2>
      <input 
        className="form-control mb-2"
        type="number" 
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))} />
      <input 
        className="form-control mb-2"
        type="number" 
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))} />
      <button 
        className="btn btn-primary"
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </button>
      <hr/>
    </div>
  );
}

// to read/write to reducer
// to maintain a and b parameters in UI
// a and b state variables to edit parameters to add in the reducer
// read the sum state variable from the reducer
// dispatch to call add redux function
// render local state variables a and b, as well as application state variable sum
// update the local component state variable a
// update the local component state variable b
// on click, call add reducer function to compute the arithmetic addition of a and b, and store it in application state variable sum 