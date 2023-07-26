import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  addProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from "@/slices/productSlice";
import { addCart } from "@/slices/cartSlice";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) return <Skeleton count={3} height={35} />;
  if (error) return <div>{error}</div>;
  return (
    <>
      <div>
        {products?.map((item: any) => {
          return (
            <div key={item.id}>
              {item.name}
              <Button
                primary
                onClick={() => dispatch(addCart({ ...item, quantity: 1 }))}
              >
                Add to cart
              </Button>
            </div>
          );
        })}
      </div>
      <div>
        <Button
          primary
          onClick={() =>
            dispatch(addProduct({ name: "Product C", price: 300 }))
          }
        >
          Add Product
        </Button>

        <Button
          primary
          onClick={() =>
            dispatch(
              updateProduct({ name: "Product C updated ", price: 400, id: 3 })
            )
          }
        >
          Update Product
        </Button>

        <Button primary onClick={() => dispatch(removeProduct(3))}>
          Delete Product
        </Button>
      </div>
    </>
  );
};

export default ProductList;
