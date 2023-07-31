import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import { useAppDispatch } from "@/store/hook";
import { addCart } from "@/slices/cartSlice";
import {
  useAddProductMutation,
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "@/api/product";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [removeProduct] = useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) return <Skeleton count={3} height={35} />;
  // if (error) return <div>{error}</div>;
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
          onClick={() => addProduct({ name: "Product C", price: 300 })}
        >
          Add Product
        </Button>

        <Button
          primary
          onClick={() =>
            updateProduct({ name: "Product C updated ", price: 400, id: 3 })
          }
        >
          Update Product
        </Button>

        <Button primary onClick={() => removeProduct(3)}>
          Delete Product
        </Button>
      </div>
    </>
  );
};

export default ProductList;
