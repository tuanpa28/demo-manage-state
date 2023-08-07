import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import { useAppDispatch } from "@/store/hook";
import {
  useAddProductMutation,
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "@/api/product";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductList = () => {
  const [removeLoadingMap, setRemoveLoadingMap] = useState<
    Record<number | string, boolean>
  >({});
  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [removeProduct, { isLoading: isRemoveLoading }] =
    useRemoveProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) return <Skeleton count={3} height={35} />;
  // if (error) return <div>{error}</div>;
  return (
    <>
      <div>
        {products?.map((item: any) => {
          return <div key={item.id}>{item.name}</div>;
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

        <Button
          primary
          onClick={() => {
            setRemoveLoadingMap((prevMap) => ({ ...prevMap, [3]: true }));
            removeProduct(3)
              .unwrap()
              .then(() => {
                alert("Xóa thành công!");

                setRemoveLoadingMap((prevMap) => ({ ...prevMap, [3]: false }));
              });
          }}
        >
          {removeLoadingMap[3] && isRemoveLoading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            "Delete Product"
          )}
        </Button>
      </div>
    </>
  );
};

export default ProductList;
