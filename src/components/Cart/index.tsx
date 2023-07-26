import { decrease, increase } from "@/slices/cartSlice";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "@/store/hook";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  return (
    <div>
      {items?.map((item: any) => (
        <div key={item.id}>
          {item.name} - {item?.quantity} - {item?.price * item?.quantity}
          <Button primary onClick={() => dispatch(increase(item.id))}>
            Increase
          </Button>
          <Button primary onClick={() => dispatch(decrease(item.id))}>
            Decrease
          </Button>
        </div>
      ))}
      Total:
      {items.reduce(function (sum: any, item: any) {
        return sum + item.price * item.quantity;
      }, 0)}
    </div>
  );
};

export default Cart;
