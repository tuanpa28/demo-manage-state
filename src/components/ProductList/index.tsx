import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { Dispatch } from "redux";
import { fetchProducts } from "@/actions/product";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) return <Skeleton count={3} height={35} />;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {products?.map((item: any) => {
        return (
          <div key={item.id}>
            {item.name}
            <Button
              primary
              onClick={() =>
                dispatch({
                  type: "cart/add",
                  payload: { ...item, quantity: 1 },
                })
              }
            >
              Add to cart
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
