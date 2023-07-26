import { decrement, increase, increment } from "@/slices/counterSlice";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "@/store/hook";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  // plain object
  return (
    <div>
      Counter: {count}
      <Button primary onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button primary onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
      <Button primary onClick={() => dispatch(increase(10))}>
        Increase
      </Button>
    </div>
  );
};

export default Counter;
