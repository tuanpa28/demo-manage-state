import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: any) => state.counter);
  // plain object
  return (
    <div>
      Counter: {count}
      <Button primary onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </Button>
      <Button primary onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </Button>
      <Button
        primary
        onClick={() => dispatch({ type: "INCREASE", payload: 10 })}
      >
        Increase
      </Button>
    </div>
  );
};

export default Counter;
