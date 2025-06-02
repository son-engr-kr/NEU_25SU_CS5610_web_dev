export default function ChildStateComponent({
  counter,
  setCounter
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Child Counter {counter}</h3>
      <button 
        onClick={() => setCounter(counter + 1)} 
        id="wd-increment-child-state-click"
        className="btn btn-success me-2">
        Increment
      </button>
      <button 
        onClick={() => setCounter(counter - 1)} 
        id="wd-decrement-child-state-click"
        className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
} 